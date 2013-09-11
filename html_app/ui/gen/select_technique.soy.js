// This file was automatically generated from select_technique.soy.
// Please don't edit this file by hand.

if (typeof scb_select_technique == 'undefined') { var scb_select_technique = {}; }


scb_select_technique.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_select_technique_view\' xmlns="http://www.w3.org/1999/html">');
  scb_homepage.display_header(opt_data, output);
  scb_common.assignment_step({step: 5, assignment_name: opt_data.assignment.name, experiment_name: opt_data.experiment.name, assignment: opt_data.assignment, experiment: opt_data.experiment}, output);
  scb_select_technique.display_details(opt_data, output);
  scb_homepage.display_footer(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


scb_select_technique.display_details = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_select_technique_details_view\'>');
  scb_common.experiment_step({step: 4}, output);
  output.append('<div class=\'scb_s_select_technique_western_blot scb_f_select_technique\'><h1 class=\'scb_s_select_technique_header\'>Available Western Blot:</h1><div class=\'scb_s_select_technique_western_blot_available\'>');
  var wList25 = opt_data.experiment.western_blot_list.list;
  var wListLen25 = wList25.length;
  for (var wIndex25 = 0; wIndex25 < wListLen25; wIndex25++) {
    var wData25 = wList25[wIndex25];
    output.append('<a class=\'scb_f_open_western_blot scb_s_select_technique_open_western_blot\' western_blot_id=\'', soy.$$escapeHtml(wData25.id), '\' href=\'#view=western_blot&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '&western_blot_id=', soy.$$escapeHtml(wData25.id), '\'>', soy.$$escapeHtml(wData25.name), '</a><br>');
  }
  output.append((opt_data.experiment.western_blot_list.length == 0) ? '<p class=\'scb_s_select_technique_none\'>No available western blots.</p><p class=\'scb_s_select_technique_none\'>Select <b>New Western Blot</b> below.</p>' : '', '</div><p><span class=\'scb_s_select_technique_reminder\'>Reminder:</span><br>Western blotting detects overall changes in the amount or chemical modifications of a particular protein. &nbsp;<a href="pdf/Reference%20Library.pdf" class=\'scb_s_select_technique_learn_more\'>Learn More</a></p><a class=\'scb_s_navigation_button scb_f_new_western_blot \' href=\'#view=western_blot&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '\'>NEW WESTERN BLOT &nbsp; &#9654;</a></div><div class=\'scb_s_select_technique_flow scb_f_select_technique\'><h1 class=\'scb_s_select_technique_header\'>Available Flow Cytometry:</h1><div class=\'scb_s_select_technique_western_blot_available\'>');
  var wList46 = opt_data.experiment.facs_list.list;
  var wListLen46 = wList46.length;
  for (var wIndex46 = 0; wIndex46 < wListLen46; wIndex46++) {
    var wData46 = wList46[wIndex46];
    output.append('<a class=\'scb_f_open_facs scb_s_select_technique_open_facs\' facs_id=\'', soy.$$escapeHtml(wData46.id), '\' href=\'#view=facs&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '&facs_id=', soy.$$escapeHtml(wData46.id), '\'>', soy.$$escapeHtml(wData46.name), '</a><br>');
  }
  output.append((opt_data.experiment.facs_list.length == 0) ? '<p class=\'scb_s_select_technique_none\'>No available flow cytometry techniques.</p><p class=\'scb_s_select_technique_none\'>Select <b>New Flow Cytometry</b> below.</p>' : '', '</div><p><span class=\'scb_s_select_technique_reminder\'>Reminder:</span><br>Flow cytometry is used to count and analyze the size, shape and properties of individual cells within a heterogeneous population of cells. &nbsp;<a href="pdf/Reference%20Library.pdf" class=\'scb_s_select_technique_learn_more\'>Learn More</a></p><a class=\'scb_s_navigation_button scb_f_new_flow_cytometry\' href=\'#view=facs&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '\'>NEW FLOW CYTOMETRY &nbsp; &#9654;</a></div><div class=\'scb_s_select_technique_micro scb_f_select_technique\'><h1 class=\'scb_s_select_technique_header\'>Available Microscopy:</h1><div class=\'scb_s_select_technique_western_blot_available\'>');
  var wList67 = opt_data.experiment.microscopy_list.list;
  var wListLen67 = wList67.length;
  for (var wIndex67 = 0; wIndex67 < wListLen67; wIndex67++) {
    var wData67 = wList67[wIndex67];
    output.append('<a class=\'scb_f_open_microscopy scb_s_select_technique_open_microscopy\' microscopy_id=\'', soy.$$escapeHtml(wData67.id), '\' href=\'#view=microscopy&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '&microscopy_id=', soy.$$escapeHtml(wData67.id), '\'>', soy.$$escapeHtml(wData67.name), '</a><br>');
  }
  output.append((opt_data.experiment.facs_list.length == 0) ? '<p class=\'scb_s_select_technique_none\'>No available microscopy techniques.</p><p class=\'scb_s_select_technique_none\'>Select <b>New Microscopy</b> below.</p>' : '', '</div><p><span class=\'scb_s_select_technique_reminder\'>Reminder:</span><br>Microscopy is used to study the shape, morphology and properties of cells, tissues or organisms that otherwise cannot be observed by eye. &nbsp;<a href="pdf/Reference%20Library.pdf" class=\'scb_s_select_technique_learn_more\'>Learn More</a></p><a class=\'scb_s_navigation_button scb_f_new_microscopy \' href=\'#view=microscopy&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '\'>NEW MICROSCOPY &nbsp; &#9654;</a></div><a class="scb_s_navigation_button scb_f_open_experiment_setup_readonly" href="#view=experiment_run&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '">&#9664; &nbsp; REVIEW SET-UP</a><br/></div>');
  return opt_sb ? '' : output.toString();
};
