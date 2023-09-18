import {home,diplome_change_vis,exp_rest_section_vis,form_web_section_vis,exp_web_section_vis,contact_section_vis} from './function_btn.js';

$("#home").click("click",home);

$("#diplome").click("click", diplome_change_vis);

$("#exp_rest").click("click", exp_rest_section_vis);

$("#form_web").click("click", form_web_section_vis);

$("#exp_web").click("click", exp_web_section_vis);

$("#contact").click("click", contact_section_vis);


$("#accueil_section" ).animate({
    height: "toggle",
    opacity: "toggle"
  }, {
    duration: "slow"
  });
$('#accueil_section').show();

$(function () {
    $(window).scroll(function () {
          if ($(this).scrollTop() > 200 ) {
              $('#back_nav').css('right','40px');
          } else { 
              $('#back_nav').removeAttr( 'style' );
          }
      });
  });
