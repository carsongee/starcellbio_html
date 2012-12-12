'use strict';

scb.ui = scb.ui || {};
scb.ui.static = scb.ui.static || {};
scb.ui.static.ExperimentSetupView = scb.ui.static.ExperimentSetupView || {};

scb.ui.static.ExperimentSetupView.scb_f_experiment_setup_action_open = function (element) {
    var dialog_selector = $('.scb_s_experiment_setup_table_add_samples_dialog');
    dialog_selector.dialog("open");
    scb.utils.off_on(dialog_selector, 'click', '.scb_f_experiment_setup_dialog_apply', function (e) {
        //TODO: form new 'cell_treatment' using dialog box
        var experiment_id = $('.scb_s_experiment_setup_table_add_samples_dialog').attr('experiment_id');
        var assignment_id = $('.scb_s_experiment_setup_table_add_samples_dialog').attr('assignment_id');
        var state = {
            experiment_id:experiment_id,
            assignment_id:assignment_id,
            view:'experiment_setup',
            skip_hash_update:true
        };
        var parsed = scb.ui.static.MainFrame.validate_state(state);
        if (parsed.redisplay) {
            alert("INVALID ELEMENT!");
        }
        var cell_treatment_list = parsed.experiment.cell_treatment_list;
        var template = parsed.assignment.template;
        var cell_lines = $('.scb_s_experiment_setup_dialog_cell_lines_select').val();
        var treatments = $('.scb_s_experiment_setup_dialog_treatments_select').val();
        var schedules = $('.scb_s_experiment_setup_dialog_collection_select').val();
        _.each(cell_lines, function (cell_line) {
            var cell_line_template = scb.utils.find(template.experiment_setup_actions.cell_lines, cell_line);
            _.each(treatments, function (treatment) {
                var treatment_template = scb.utils.find(template.experiment_setup_actions.treatment_protocol_list, treatment);
                _.each(schedules, function (schedule) {
                    var collection_template = scb.utils.find(template.experiment_setup_actions.collection_schedule_list, schedule);
                    var construct = {};
                    _.each(cell_line_template, function (v, k) {
                        if (k != 'id' && k != 'title') {
                            construct[k] = v;
                        }
                    });
                    _.each(treatment_template, function (v, k) {
                        if (k != 'id' && k != 'title') {
                            construct[k] = v;
                        }
                    });
                    _.each(collection_template, function (v, k) {
                        if (k != 'id' && k != 'title') {
                            construct[k] = v;
                        }
                    });
                    cell_treatment_list.start(construct);
                    console.info("NEXT");
                });
            });
            scb.ui.static.MainFrame.refresh();
        });
        scb.ui.static.ExperimentSetupView.scb_f_experiment_setup_action_apply(this);
    });
    scb.utils.off_on(dialog_selector, 'click', '.scb_f_experiment_setup_dialog_cancel', function (e) {
        scb.ui.static.ExperimentSetupView.scb_f_experiment_setup_action_cancel(this);
    });
}
//TODO: are these used?
scb.ui.static.ExperimentSetupView.scb_f_experiment_setup_action_apply = function (param) {
    $('.scb_s_experiment_setup_table_add_samples_dialog').dialog("close");
};

//TODO: are these used?
scb.ui.static.ExperimentSetupView.scb_f_experiment_setup_action_cancel = function (param) {
    $('.scb_s_experiment_setup_table_add_samples_dialog').dialog("close");
};

scb.ui.static.ExperimentSetupView.scb_f_experiment_setup_remove_sample = function (param) {
    var experiment_id = $(param).attr('experiment_id');
    var assignment_id = $(param).attr('assignment_id');
    var cell_treatment_id = $(param).attr('cell_treatment_id');

    var state = {
        experiment_id:experiment_id,
        assignment_id:assignment_id,
        view:'experiment_setup',
        skip_hash_update:true
    };
    var parsed = scb.ui.static.MainFrame.validate_state(state);
    if (parsed.redisplay) {
        alert("INVALID ELEMENT!");
    }
    var cell_treatment_list = parsed.experiment.cell_treatment_list;
    cell_treatment_list.remove(cell_treatment_id);
    scb.ui.static.MainFrame.refresh();
};



scb.ui.static.ExperimentSetupView.register = function (workarea) {
    scb.utils.off_on(workarea, 'click', '.scb_f_experiment_setup_table_add_samples_dialog', function (e) {
        scb.ui.static.ExperimentSetupView.scb_f_experiment_setup_action_open(this);
    });
    scb.utils.off_on(workarea, 'click', '.scb_f_experiment_setup_remove_sample', function (e) {
        scb.ui.static.ExperimentSetupView.scb_f_experiment_setup_remove_sample(this);
    });
}

scb.ui.ExperimentSetupView = function scb_ui_ExperimentSetupView(gstate) {
    var self = this;

    self.headings = function (table_map) {
        var headings = [];
        _.each(table_map, function (part) {
            if (part.kind == 'cell_line') {
                headings.push(part);
            }
            if (part.kind == 'treatments') {
                for (var subpart_index in part.children) {
                    var subpart = part.children[subpart_index];
                    headings.push(subpart);
                }
            }
            if (part.kind == 'custom') {
                headings.push(part);
            }
            if (part.kind == 'actions') {
                headings.push(part);
            }


        });
        return headings;
    }

    self.rows = function (cell_treatment_list, headings, template) {
        var rows = [];
        _.each(cell_treatment_list, function (sample, sample_index, list) {
            var treatment_list = sample.treatment_list.list;
            var size = treatment_list.length;
            var total_height = 0;
            _.each(treatment_list, function (treatment) {
                total_height += treatment.drug_list.length;
            });
            _.each(treatment_list, function (treatment, treatment_index, list) {
                var drug_list = treatment.drug_list.list;
                _.each(drug_list, function (drug, drug_index, list) {
                    var row = [];
                    _.each(headings, function (part, part_index, list) {
                        if (drug_index == 0 && treatment_index == 0 && part.kind == 'cell_line') {
                            row.push({
                                kind:'cell_line',
                                title:template.cell_lines[sample.cell_line].name,
                                rows:total_height
                            });
                        }
                        else if (part.kind == 'drug') {
                            row.push({
                                kind:'drug',
                                title:drug.drug_name,
                                rows:1
                            });
                        }
                        else if (part.kind == 'concentration') {
                            row.push({
                                kind:'concentration',
                                title:drug.drug_concentration,
                                rows:1
                            });
                        }
                        else if (drug_index == 0 && part.kind == 'start') {
                            row.push({
                                kind:'start',
                                title:treatment.schedule,
                                rows:drug_list.length
                            });
                        }
                        else if (drug_index == 0 && part.kind == 'duration') {
                            row.push({
                                kind:'duration',
                                title:treatment.duration,
                                rows:drug_list.length
                            })
                        }
                        else if (drug_index == 0 && treatment_index == 0 && part.kind == 'custom') {
                            row.push({
                                kind:part.kind,
                                title:sample[part.key],
                                rows:total_height
                            })
                        }
                        else if (drug_index == 0 && treatment_index == 0 && part.kind == 'actions') {
                            row.push({
                                kind:part.kind,
                                rows:total_height
                            });
                        }
                    });
                    rows.push({
                        id:sample.id,
                        columns:row
                    });
                });
            });
        });
        return rows;
    }

    self.action_rows = function (template, actions, headings) {
        var action_rows = {};
        _.each(actions, function (action, action_index, list) {
            if (action.kind == 'add_protocol') {
                var json_list = { list:template.experiment_setup_actions.add_protocol};
                var list = new scb.CellTreatmentList(json_list, gstate.context, null);
                var rows = self.rows(list, headings);
                action_rows = _.union(action_rows, rows);
            } else {
                throw 'Unknown action kind';
            }
        });
        return action_rows;
    }

    self.show = function (state) {
        var workarea = state.workarea;
        var experiment = state.experiment;
        var template = state.assignment.template;
        var headings = self.headings(template.ui.experiment_setup.table);
        var rows = self.rows(experiment.cell_treatment_list.list, headings, template);
        var action_rows = self.action_rows(template, template.ui.experiment_setup.actions, headings);

        workarea.html(scb_experiment_setup.main({
            global_template:gstate.context.master_model,
            t:template,
            assignment:state.assignment,
            experiment:state.experiment,
            headings:headings,
            rows:rows,
            actions:template.ui.experiment_setup.actions,
            action_rows:action_rows
        }));
        state.experiment.last_view = 'experiment_design';
        $('.scb_s_experiment_setup_table_add_samples_dialog').dialog({autoOpen:false})
    }
}