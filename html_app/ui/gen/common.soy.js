// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof scb_common == 'undefined') { var scb_common = {}; }


scb_common.assignment_step = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var eid__soy3 = new soy.StringBuilder((opt_data.assignments) ? soy.$$escapeHtml(opt_data.assignments.selected.experiments.selected_id) : (opt_data.assignment) ? soy.$$escapeHtml(opt_data.assignment.experiments.selected_id) : (opt_data.experiment) ? soy.$$escapeHtml(opt_data.experiment.id) : '');
  eid__soy3 = eid__soy3.toString();
  var aid__soy11 = new soy.StringBuilder((opt_data.assignments) ? soy.$$escapeHtml(opt_data.assignments.selected_id) : (opt_data.assignment) ? soy.$$escapeHtml(opt_data.assignment.id) : '');
  aid__soy11 = aid__soy11.toString();
  var wbid__soy17 = new soy.StringBuilder((opt_data.assignments && opt_data.assignments.selected.experiments.selected) ? soy.$$escapeHtml(opt_data.assignments.selected.experiments.selected.western_blot_list.selected_id) : (opt_data.assignment) ? soy.$$escapeHtml(opt_data.assignment.experiments.selected.western_blot_list.selected_id) : '');
  wbid__soy17 = wbid__soy17.toString();
  var fid__soy23 = new soy.StringBuilder((opt_data.assignments && opt_data.assignments.selected.experiments.selected) ? soy.$$escapeHtml(opt_data.assignments.selected.experiments.selected.facs_list.selected_id) : (opt_data.assignment) ? soy.$$escapeHtml(opt_data.assignment.experiments.selected.facs_list.selected_id) : '');
  fid__soy23 = fid__soy23.toString();
  var mid__soy29 = new soy.StringBuilder((opt_data.assignments && opt_data.assignments.selected.experiments.selected) ? soy.$$escapeHtml(opt_data.assignments.selected.experiments.selected.microscopy_list.selected_id) : (opt_data.assignment) ? soy.$$escapeHtml(opt_data.assignment.experiments.selected.microscopy_list.selected_id) : '');
  mid__soy29 = mid__soy29.toString();
  output.append((opt_data.step > 0) ? '<div class=\'scb_s_assignment_step\' xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html"><a class=\'scb_s_assignment_step_link scb_f_assignments_step_link ' + ((opt_data.step < 2 && opt_data.step > 0) ? 'scb_s_assignment_step_link_active' : '') + '\' href=\'#view=assignments\' aria-label=\'Assignments\' role=\'tab\'><div class=\'scb_s_assignment_step_wrapper\' style=\'position: absolute; left: 29px; bottom: 20px;\' aria-hidden=\'true\'><div class=\'' + ((opt_data.step < 2 && opt_data.step > 0) ? 'scb_s_assignments_link_img_active' : 'scb_s_assignments_link_img ') + '\'></div>ASSIGNMENTS</div></a><a class=\'scb_s_assignment_step_link scb_f_experiments_step_link ' + ((opt_data.step >= 2) ? 'scb_s_assignment_step_link_active' : '') + '\' href=' + ((opt_data.assignments && ! opt_data.assignments.selected.experiments.selected) ? '\'#view=experiment_design&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '\'' : (opt_data.prev_step == 1) ? '\'#view=experiment_design&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '&experiment_id=' + soy.$$escapeHtml(eid__soy3) + '\'' : (opt_data.prev_step == 2) ? '\'#view=experiment_setup&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '&experiment_id=' + soy.$$escapeHtml(eid__soy3) + '\'' : (opt_data.prev_step == 3) ? '\'#view=select_technique&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '&experiment_id=' + soy.$$escapeHtml(eid__soy3) + '\'' : (opt_data.prev_step == 4) ? '\'#view=western_blot&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '&experiment_id=' + soy.$$escapeHtml(eid__soy3) + '&western_blot_id=' + soy.$$escapeHtml(wbid__soy17) + '\'' : (opt_data.prev_step == 4 && ! wbid__soy17 == 'null') ? '\'#view=western_blot&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '&experiment_id=' + soy.$$escapeHtml(eid__soy3) + '\'' : (opt_data.prev_step == 5) ? '\'#view=facs&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '&experiment_id=' + soy.$$escapeHtml(eid__soy3) + '&facs_id=' + soy.$$escapeHtml(fid__soy23) + '\'' : (opt_data.prev_step == 5 && ! fid__soy23 == 'null') ? '\'#view=facs&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '&experiment_id=' + soy.$$escapeHtml(eid__soy3) + '\'' : (opt_data.prev_step == 6) ? '\'#view=microscopy&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '&experiment_id=' + soy.$$escapeHtml(eid__soy3) + '&microscopy_id=' + soy.$$escapeHtml(mid__soy29) + '\'' : (opt_data.prev_step == 6 && ! mid__soy29 == 'null') ? '\'#view=microscopy&assignment_id=' + soy.$$escapeHtml(aid__soy11) + '&experiment_id=' + soy.$$escapeHtml(eid__soy3) + '\'' : '\'#view=experiment_design\'') + 'aria-label=\'Experiments\' role=\'tab\'><div class=\'scb_s_assignment_step_wrapper\'  aria-hidden=\'true\'><div class=\'' + ((opt_data.step >= 2) ? 'scb_s_experiments_link_img_active' : 'scb_s_experiments_link_img ') + '\'></div>EXPERIMENTS</div></a><div class=\'scb_s_assignment_step_link scb_f_lab_notebook_link\' role=\'tab\' aria-label=\'Lab Notebook\' aria-disabled=\'true\' onclick=\'alert("in construction");\'><div class=\'scb_s_assignment_step_wrapper\'  aria-hidden=\'true\'><div class=\'scb_s_lab_notebook_link_img\'></div>LAB NOTEBOOK</div></div></div>' : '');
  return opt_sb ? '' : output.toString();
};


scb_common.experiment_step = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_experiment_step\'><div class = \'scb_s_experiment_step_progress_label\'> ', soy.$$escapeHtml(opt_data.assignment.name), ':</div><div class=\'scb_s_assignment_step_experiment\'><label class="custom-select"><select role=\'list\' aria-label=\'Experiments\' alt=\'\' onchange="location = this.value;">');
  var eList130 = opt_data.assignment.experiments.list;
  var eListLen130 = eList130.length;
  for (var eIndex130 = 0; eIndex130 < eListLen130; eIndex130++) {
    var eData130 = eList130[eIndex130];
    output.append('<option role=\'listitem\' aria-label=\'', soy.$$escapeHtml(eData130.name), '\' value="#view=experiment_last&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '&experiment_id=', soy.$$escapeHtml(eData130.id), (eData130.last_view == 'microscopy') ? '&microscopy_id=' + soy.$$escapeHtml(eData130.microscopy_list.selected_id) : (eData130.last_view == 'facs') ? '&facs_id=' + soy.$$escapeHtml(eData130.facs_list.selected_id) : (eData130.last_view == 'western_blot' || eData130.last_view == 'western_blot_gel') ? '&western_blot_id=' + soy.$$escapeHtml(eData130.western_blot_list.selected_id) : '', '" model_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' sub_model_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\'', (opt_data.experiment.id == eData130.id) ? 'selected="selected"' : '', '>', soy.$$escapeHtml(eData130.name), '&nbsp;&nbsp;</option>');
  }
  output.append('</select></label></div><a class="scb_f_open_experiment scb_f_open_experiment_top scb_s_navigation_button" href="#view=experiment_design&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '" aria-label=\'New Experiment\' role=\'button\'> NEW EXPERIMENT &nbsp; <span aria-hidden="true" tabindex="-1">+</span></a><br/><br/><div class="scb_s_experiment_step_div " style=\'height:', (opt_data.step > 3 || opt_data.last_step > 4) ? ' 112px ' : ' 112px', '\' ><div class=\'scb_s_experiment_step_main_steps \'><div class=\'scb_s_experiment_step_labels\' aria-live=\'polite\'><div class=\'scb_s_experiment_step_text scb_s_experiment_step_design ', (opt_data.step > 1 || opt_data.last_step > 0) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step == 1) ? 'scb_s_experiment_step_selected' : '', '\' aria-label=\'Experiment Design\' aria-disabled=\'', (opt_data.step > 1 || opt_data.last_step > 0 || opt_data.step == 1) ? 'false' : 'true', '\' role =\'button\'>', (opt_data.step > 1 || opt_data.last_step > 0) ? '<a href=\'#view=experiment_design&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '\' >1. DESIGN</a>' : '1. DESIGN', '<div class="arrow-design-outer"><div class="arrow-down-design ', (opt_data.step == 1) ? 'arrow-down-design-selected' : (opt_data.step > 1 || opt_data.last_step > 0) ? 'arrow-down-design-visited ' : '', '"></div></div>', (opt_data.step == 1) ? '' : '', '</div><div class=\'scb_s_experiment_step_text scb_s_experiment_step_setup_and_run ', (opt_data.step > 2 || opt_data.last_step > 3) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step == 2 || opt_data.step == 3) ? 'scb_s_experiment_step_selected' : '', '\' aria-label=\'Setup and Run Experiment\'  aria-disabled=\'', (opt_data.step > 2 || opt_data.last_step > 3 || opt_data.step == 2 || opt_data.step == 3) ? 'false' : 'true', '\' role =\'button\' >', (opt_data.step > 2 || opt_data.last_step > 3) ? '<a href=\'#view=experiment_setup&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '\' >2. SETUP & RUN</a>' : '2. SETUP & RUN', '<div class="arrow-setup-outer"><div class="arrow-down-setup ', (opt_data.step > 2 || opt_data.last_step > 3) ? 'arrow-down-setup-visited' : '', ' ', (opt_data.step == 2 || opt_data.step == 3) ? 'arrow-down-setup-selected' : '', '"></div></div>', (opt_data.step == 2 || opt_data.step == 3) ? '' : '', '</div><div class=\'scb_s_experiment_step_text scb_s_experiment_step_select_technique ', (opt_data.step > 3 || opt_data.last_step > 4) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step > 3) ? 'scb_s_experiment_step_selected' : '', '\'   aria-label=\'Select Experiment Technique\' aria-disabled=\'', (opt_data.step > 3 || opt_data.last_step > 4 || opt_data.step > 3) ? 'false' : 'true', '\' role =\'button\'>', (opt_data.step > 3 || opt_data.last_step > 4) ? '<a href=\'#view=select_technique&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '\' >3. SELECT TECHNIQUE</a>' : '3. SELECT TECHNIQUE', (opt_data.step > 3) ? '<div class="arrow-down-select"></div>' : '', '</div></div></div><div class=\'scb_s_experiment_step_tech_steps \' style=\'', (opt_data.experiment.western_blot_list.length > 0 || opt_data.experiment.facs_list.length > 0 || opt_data.experiment.microscopy_list.length > 0) ? '' : 'display:none;', '\'><div class=\'scb_s_experiment_step_buttons_title scb_s_experiment_step_active_title\'>Perform Your Technique: </div><div class=\'scb_s_experiment_step_button scb_s_experiment_step_button_wb ', (opt_data.experiment.western_blot_list.length > 0) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step == 5) ? 'scb_s_experiment_step_selected' : '', '\'  aria-disabled=\'true\' role =\'button\'aria-label=\'Start Western Blotting\'>', (opt_data.experiment.western_blot_list.length <= 0 || opt_data.step == 5) ? 'Western Blotting' : '<a href=\'#view=western_blot&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '&western_blot_id=' + soy.$$escapeHtml(opt_data.experiment.western_blot_list.selected_id) + '\'>Western Blotting</a>', '</div><div class=\' scb_s_experiment_step_button scb_s_experiment_step_button_facs ', (opt_data.experiment.facs_list.length > 0) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step == 6) ? 'scb_s_experiment_step_selected' : '', '\'  aria-disabled=\'true\' role =\'button\'  aria-label=\'Start Flow Cytometry\'>', (opt_data.experiment.facs_list.length <= 0 || opt_data.step == 6) ? 'Flow Cytometry' : '<a href=\'#view=facs&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '&facs_id=' + soy.$$escapeHtml(opt_data.experiment.facs_list.selected_id) + '\'>Flow Cytometry</a>', '</div><div class=\'scb_s_experiment_step_button scb_s_experiment_step_button_micro ', (opt_data.experiment.microscopy_list.length > 0) ? 'scb_s_experiment_step_visited' : '', ' ', (opt_data.step == 7) ? 'scb_s_experiment_step_selected' : '', '\'  aria-disabled=\'true\' role =\'button\' aria-label=\'Start Microscopy\'>', (opt_data.experiment.microscopy_list.length <= 0 || opt_data.step == 7) ? 'Microscopy' : '<a href=\'#view=microscopy&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '&microscopy_id=' + soy.$$escapeHtml(opt_data.experiment.microscopy_list.selected_id) + '\'>Microscopy</a>', '</div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


scb_common.contact_overlay = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'contact_overlay\'></div>');
  return opt_sb ? '' : output.toString();
};


scb_common.format_time_detailed_w_sec = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.days == 0 && opt_data.hours == 0 && opt_data.minutes == 0 && opt_data.seconds == 0) ? '' : ((opt_data.days != 0) ? ' ' + soy.$$escapeHtml(opt_data.days) + ' ' + ((opt_data.days > 1) ? 'd' : 'd') : '') + ((opt_data.hours != 0) ? ' ' + soy.$$escapeHtml(opt_data.hours) + ' ' + ((opt_data.hours > 1) ? 'h' : 'h') : '') + ((opt_data.minutes != 0) ? ' ' + soy.$$escapeHtml(opt_data.minutes) + ' ' + ((opt_data.minutes > 1) ? 'min' : 'min') : '') + ((opt_data.seconds != 0) ? ' ' + soy.$$escapeHtml(opt_data.seconds) + ' ' + ((opt_data.seconds > 1) ? 'sec' : 'sec') : '') + ((opt_data.now) ? '0 sec' : ''));
  return opt_sb ? '' : output.toString();
};


scb_common.format_time_detailed = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.weeks == 0 && opt_data.months == 0 && opt_data.days == 0 && opt_data.hours == 0 && opt_data.minutes == 0) ? '' : ((opt_data.months != 0) ? ' ' + soy.$$escapeHtml(opt_data.months) + ' ' + ((opt_data.months > 1) ? 'mths' : 'mth') : '') + ((opt_data.weeks != 0) ? ' ' + soy.$$escapeHtml(opt_data.weeks) + ' ' + ((opt_data.weeks > 1) ? 'wks' : 'wk') : '') + ((opt_data.days != 0) ? ' ' + soy.$$escapeHtml(opt_data.days) + ' ' + ((opt_data.days > 1) ? 'd' : 'd') : '') + ((opt_data.hours != 0) ? ' ' + soy.$$escapeHtml(opt_data.hours) + ' ' + ((opt_data.hours > 1) ? 'h' : 'h') : '') + ((opt_data.minutes != 0) ? ' ' + soy.$$escapeHtml(opt_data.minutes) + ' ' + ((opt_data.minutes > 1) ? 'min' : 'min') : '') + ((opt_data.now) ? '0 sec' : ''));
  return opt_sb ? '' : output.toString();
};
