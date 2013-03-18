scb.components = scb.components || {};

scb.components.FACSModelFactory = function scb_components_FACSModelFactory(model, template) {
    var self = this;

    if (scb.utils.isDefined(model.dna)) {
        self.dna = function (state) {
            var t = template;
            var m = model.dna;
            if (m.parser_simple) {
                var facs_lane = state.facs_lane;
                var cell_treatment = facs_lane.cell_treatment;
                var cell_line = cell_treatment.cell_line;
                var drug_treatments = cell_treatment.treatment_list.list;
                var shape = '';
                var facs_state = {
                    cell_line: function (str) {
                        return str == cell_treatment.cell_line
                    },
                    temperature: function (str) {
                        return str == drug_treatments[0].temperature
                    },
                    drug_id: function (str) {
                        var any = false;
                        _.each(drug_treatments, function (dt) {
                            _.each(dt.drug_list.list, function (drug) {
                                any |= (drug.drug_id == str);
                            });
                        });
                        return any;
                    }
                }

                _.each(m.parser_simple, function (rule) {
                    console.info(rule);
                    if (rule.match.length == 0) {
                        shape = rule.shape;
                    }
                    else {
                        var matches = true;
                        _.each(rule.match, function (property) {
                            if (facs_state[property]) {
                                matches &= facs_state[property](rule[property]);
                            }
                            else {
                                console.info("UNDEFINED PROPERTY: " + property);
                            }
                        });
                        if (matches) {
                            shape = rule.shape;
                        }
                    }
                });
                state.shape = shape;
                self.shape_to_data(state);

            }
            // here we need to compute how this actually works
            /* I think:
             - Model will initiate random stuff when it starts
             - Here we will move model depending on drugs
             - And finish with collection time
             - Visualizer will count from here and draw DNA curve
             */
        }
        self.shape_to_data = function (state) {
            var shape = state.shape;

            function g0g1(x) {
                return 2 * Math.exp(-((x - 1) * (x - 1)) * 60);
            }

            function near_zero(x) {
                return 1 / 2 * ( x > 0 && x < 1 ? (.08 - x / 50) : 0 );
            }

            function s(x) {
                return .05 * (5 * (x > .8 && x < 1 ? x - .8 : 0) + (x > 1 & x < 2 ? (.8 + (2 - x) / 5) : 0) / .6 + 1.3 * (x > 2 & x < 2.3 ? (2.3 - x) / .3 : 0));
            }

            function g2m(x) {
                return 1 / 4 * Math.exp(-((x - 2) * (x - 2) * 30));
            }

            function s_block(x) {
                return Math.exp(-((2 - x) * Math.exp(2 - x) - .9) * ((2 - x) * Math.exp(2 - x) - .9) / .4);
            }

            function normalize(data) {
                var sum = 0;
                _.each(data, function (s) {
                    sum += s[1];
                });
                if (sum != 0) {
                    _.each(data, function (s, index) {
                        data[index][1] /= sum;
                    });
                }
            }

            var options = {
                series: {
                    lines: {show: true, fill: true, steps: true},
                    points: {show: false, radius: 1, fill: false},
                },
                xaxis: {
                    min: 0,
                    max: 3,
                    ticks: [1, 2],
                    tickFormatter: function (tf) {
                        return tf + " C"
                    },
                    font: {
                        family: 'sourcesanspro-regular',
                        size: 11,
                    }
                },
                yaxis: {
                    font: {
                        family: 'sourcesanspro-regular',
                        size: 11
                    }

                },
                grid: {show: true, clickable: true, hoverable: true, borderWidth: 0, autoHighlight: true},
                hooks: { bindEvents: [ function (plot, eventHolder) {
                    var xaxes = plot.getXAxes()[0];
                    var yaxes = plot.getYAxes()[0];
                    console.info(plot);
                    console.info(eventHolder);
                    eventHolder.click(function (e) {
                        var px = xaxes.c2p(e.offsetX);
                        var py = yaxes.c2p(e.offsetY);
                        console.info(px + " " + py);
                    });
                    eventHolder.mousemove(function (e) {
                        var px = xaxes.c2p(e.offsetX);
                        var py = yaxes.c2p(e.offsetY);
                        console.info(px + " " + py);
                    });

                }
                ]
                }
            };
            if (('' + shape).toLowerCase() == 'normal') {
                var data = [];
                for (var x = 0; x < 3; x += .01) {
                    var y = g0g1(x) + g2m(x) + near_zero(x) + s(x);
                    data.push([x, y]);

                }
                normalize(data);
                state.data = {
                    data: [
                        {label: 'DNA Content', data: data},
//                        {label: 'phase 1', data:[[0,0.01],[0.8,0.01]],lines:{fill:false}},
//                        {label: 'phase 2', data:[[0.8,0.011],[1.2,0.011]],lines:{fill:false}},
//                        {label: 'phase 3', data:[[1.2,0.01],[1.8,0.01]],lines:{fill:false}},
//                        {label: 'phase 4', data:[[1.8,0.011],[2.3,0.011]],lines:{fill:false}}

                    ],
                    options: options
                };
            }
            if (('' + shape).toLowerCase() == 's-block') {
                var data = [];
                for (var x = 0; x < 3; x += .01) {
                    var y = s_block(x);
                    data.push([x, y]);

                }
                normalize(data);
                state.data = {
                    data: [
                        {label: 'DNA Content', data: data}
                    ],
                    options: options
                };
            }
            if (('' + shape).toLowerCase() == 'g1-block') {

            }
            if (('' + shape).toLowerCase() == 'g2-block') {
                var data = [];
                for (var x = 0; x < 3; x += .01) {
                    var y = g2m(x);
                    data.push([x, y]);

                }
                normalize(data);
                state.data = {
                    data: [
                        {label: 'DNA Content', data: data}
                    ],
                    options: options
                };
            }
            if (('' + shape).toLowerCase() == 'alpha-block') {
                var data = [];
                for (var x = 0; x < 3; x += .01) {
                    var y = g0g1(x);
                    data.push([x, y]);
                }
                normalize(data);
                state.data = {
                    data: [
                        {label: 'DNA Content', data: data}
                    ],
                    options: options
                };
            }

        }
    }

    self.compute = function (state) {
        return self.dna(state);
    }
}