// This file was automatically generated from homepage.soy.
// Please don't edit this file by hand.

if (typeof scb_homepage == 'undefined') { var scb_homepage = {}; }


scb_homepage.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_homepage_view\'>');
  scb_homepage.display_header(opt_data, output);
  scb_common.assignment_step({step: 0}, output);
  scb_homepage.display_content(null, output);
  scb_homepage.display_footer(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


scb_homepage.display_header = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_header\'><img class=\'scb_s_header_line_top\' src=\'images/header/scb_header_line.png\'><a href=\'#view=homepage\'><img class=\'scb_s_logo\' src=\'images/header/scb_logo.png\'></a><span class=\'scb_s_header_tools\'><img class=\'scb_s_envelope_icon\' src=\'images/header/scb_envelope_icon.png\'><img class=\'scb_s_envelope_text scb_s_header_tools_text\' src=\'images/header/scb_envelope_text.png\'><img class=\'scb_s_header_vertical_line\' src=\'images/header/scb_vertical_divider.png\'><img class=\'scb_s_cabinet_icon\' src=\'images/header/scb_cabinet_icon.png\'><img class=\'scb_s_cabinet_text scb_s_header_tools_text\' src=\'images/header/scb_cabinet_text.png\'><img class=\'scb_s_header_vertical_line\' src=\'images/header/scb_vertical_divider.png\'><img class=\'scb_s_user_guide_icon\' src=\'images/header/scb_user_guide_icon.png\'><img class=\'scb_s_user_guide_text scb_s_header_tools_text\' src=\'images/header/scb_user_guide_text.png\'><img class=\'scb_s_header_vertical_line\' src=\'images/header/scb_vertical_divider.png\'><a href=\'#view=assignments\'><img class=\'scb_s_login_status\' src=\'images/header/scb_signin_text.png\'></a></span></div>');
  return opt_sb ? '' : output.toString();
};


scb_homepage.display_content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_homepage_content\'><span class=\'scb_s_homepage_top\'><span class=\'scb_s_homepage_top_left\'><img class=\'scb_s_homepage_top_left_image\' src=\'images/homepage/welcome_text.png\'><br/><span class=\'scb_s_homepage_see_more_button\'><img src=\'images/homepage/more.png\'></span></span><span class=\'scb_s_homepage_top_center\'><img class=\'scb_s_homepage_top_center_image\' src=\'images/homepage/lab.png\'></span><span class=\'scb_s_homepage_top_right\'><img class=\'scb_s_homepage_video_player\' src=\'images/homepage/player_background.png\'><a class=\'scb_no_underline\' href=\'#view=assignments\'><div class=\'scb_f_try_an_experiment scb_s_homepage_blue_actions\'>Try an Experiment</div></a><img class=\'scb_s_homepage_blue_line\' src=\'images/homepage/horizontal_line.png\'><div class=\'scb_f_create_instructors_account scb_s_homepage_blue_actions\'>Create Instructors Account</div><img class=\'scb_s_homepage_blue_line\' src=\'images/homepage/horizontal_line.png\'><div class=\'scb_f_create_student_account scb_s_homepage_blue_actions\'>Create Student Account</div><br><button class=\'scb_f_instructor_resources scb_s_instructor_resources\'>INSTRUCTOR RESOURCES</button></span></span>');
  scb_homepage.display_experiment_design(null, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


scb_homepage.display_experiment_design = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'scb_s_homepage_bottom\'><span class=\'scb_s_homepage_experimental_design\'><img class=\'scb_s_homepage_experimental_design_text\' src=\'images/homepage/experimental_design.png\'><img class=\'scb_s_homepage_experimental_design_bar\' src=\'images/homepage/experimental_design_bar.png\'><span class=\'scb_s_homepage_experimental_design_list\'><span class=\'scb_s_homepage_experimental_design_list_title\'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span><div class=\'scb_s_homepage_experimental_design_list_items\'><div class=\'scb_s_homepage_experimental_design_bullet_item\'><span class=\'scb_s_homepage_experimental_design_bullet\'>1.</span><span class=\'scb_s_homepage_experimental_design_item\'>Design</span></div><div class=\'scb_s_homepage_experimental_design_bullet_item\'><span class=\'scb_s_homepage_experimental_design_bullet\'>2.</span><span class=\'scb_s_homepage_experimental_design_item\'>Setup</span></div><div class=\'scb_s_homepage_experimental_design_bullet_item\'><span class=\'scb_s_homepage_experimental_design_bullet\'>3.</span><span class=\'scb_s_homepage_experimental_design_item\'>Run Experiment</span></div><div class=\'scb_s_homepage_experimental_design_bullet_item\'><span class=\'scb_s_homepage_experimental_design_bullet\'>4.</span><span class=\'scb_s_homepage_experimental_design_item\'>Select Technique(s)</span></div><div class=\'scb_s_homepage_experimental_design_bullet_item\'><span class=\'scb_s_homepage_experimental_design_bullet\'>5.</span><span class=\'scb_s_homepage_experimental_design_item\'>Run Technique(s)</span></div><div class=\'scb_s_homepage_experimental_design_bullet_item\'><span class=\'scb_s_homepage_experimental_design_bullet\'>6.</span><span class=\'scb_s_homepage_experimental_design_item\'>Analyze</span></div><div class=\'scb_s_homepage_experimental_design_bullet_item\'><span class=\'scb_s_homepage_experimental_design_bullet\'>7.</span><span class=\'scb_s_homepage_experimental_design_item\'>Conclude</span></div></div><img class=\'scb_s_homepage_experimental_design_list_bar\' src=\'images/homepage/experimental_design_bar.png\'><span class=\'scb_s_homepage_experimental_design_list_info\'>Euismod tincidunt ut laoreet dolore magna kjowkd aliquam erat volu<button class=\'scb_s_homepage_learn_more\'>LEARN MORE</button></span></span></span><span class=\'scb_s_homepage_technique\'><span class=\'scb_s_homepage_technique_title\'><img src=\'images/homepage/techniques.png\'></span>');
  scb_homepage.display_techniques(null, output);
  output.append('</span></span>');
  return opt_sb ? '' : output.toString();
};


scb_homepage.display_techniques = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'scb_s_homepage_technique_wb\'><img class=\'scb_s_homepage_technique_title_image\' src=\'images/homepage/western_blot.png\'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..<button class=\'scb_s_homepage_technique_learn_more\'>LEARN MORE</button></span><img class=\'scb_s_homepage_technique_bar\' src=\'images/homepage/experimental_design_bar.png\'><span class=\'scb_s_homepage_technique_flow\'><img class=\'scb_s_homepage_technique_title_image\' src=\'images/homepage/flow_cytometry.png\'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..<button class=\'scb_s_homepage_technique_learn_more\'>LEARN MORE</button></span><img class=\'scb_s_homepage_technique_bar\' src=\'images/homepage/experimental_design_bar.png\'><span class=\'scb_s_homepage_technique_micro\'><img class=\'scb_s_homepage_technique_title_image\' src=\'images/homepage/microscopy.png\'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..<button class=\'scb_s_homepage_technique_learn_more\'>LEARN MORE</button></span><img class=\'scb_s_homepage_technique_more\' src=\'images/homepage/more_techniques.png\'>');
  return opt_sb ? '' : output.toString();
};


scb_homepage.display_footer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_footer\'><img class=\'scb_s_homepage_footer_logo\' src=\'images/homepage/mit_logo.png\'><img class=\'scb_s_homepage_footer_divider\' src=\'images/homepage/small_divider.png\'><img class=\'scb_s_homepage_footer_about\' src=\'images/homepage/about_star.png\'><img class=\'scb_s_homepage_footer_divider\' src=\'images/homepage/small_divider.png\'><img class=\'scb_s_homepage_footer_support\' src=\'images/homepage/support.png\'><button class=\'save_master_model\'>Save</button><button class=\'load_master_model\'>Load</button></div>');
  return opt_sb ? '' : output.toString();
};