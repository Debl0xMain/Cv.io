var color_hover = "blue";

export const home = () => {
    $('#diplome_section').hide();
    $('#diplome').removeAttr("style");
    $('#exp_rest_section').hide();
    $('#exp_rest').removeAttr("style");
    $('#contact_section').hide();
    $('#form_web_section').hide();
    $('#form_web').removeAttr("style");
    $('#contact').removeAttr("style");
    $('#exp_web_section').hide();
    $('#exp_web').removeAttr("style");
    accueil_vis();
}
export const diplome_change_vis = () => {

    if ($('#diplome_section').is(':visible')) {
        $('#diplome_section').hide();
        $('#diplome').removeAttr("style");
        accueil_vis();
    }
    else {
        $("#diplome_section").animate({
            height: "toggle",
            opacity: "toggle"
          }, {
            duration: "slow"
          });
        $('#diplome_section').show();
        $('#diplome').css("color", color_hover);
        $('#diplome').css("font-weight", 'bold');

        accueil_vis();
    }
}
export const exp_rest_section_vis = () => {

    if ($('#exp_rest_section').is(':visible')) {
        $('#exp_rest_section').hide();
        $('#exp_rest').removeAttr("style");
        accueil_vis();
    }
    else {
        $("#exp_rest_section").animate({
            height: "toggle",
            opacity: "toggle"
          }, {
            duration: "slow"
          });
        $('#exp_rest_section').show();
        $('#exp_rest').css("color", color_hover);
        $('#exp_rest').css("font-weight", 'bold');
        accueil_vis();
        var target = $('#form_web_section').offset().top;
        $('html, body').animate({scrollTop: target}, 1000);
    }
}

export const form_web_section_vis = () => {

    if ($('#form_web_section').is(':visible')) {
        $('#form_web_section').hide();
        $('#form_web').removeAttr("style");
        accueil_vis();
    }
    else {
        $("#form_web_section").animate({
            height: "toggle",
            opacity: "toggle"
          }, {
            duration: "slow"
          });
        $('#form_web_section').show();
        $('#form_web').css("font-weight", 'bold');
        $('#form_web').css("color", color_hover);
        accueil_vis();
        var target = $('#form_web_section').offset().top;
        $('html, body').animate({scrollTop: target}, 1000);
    }
}


export const exp_web_section_vis = () => {

    if ($('#exp_web_section').is(':visible')) {
        $('#exp_web_section').hide();
        $('#exp_web').removeAttr("style");
        accueil_vis();
    }
    else {
        $("#exp_web_section").animate({
            height: "toggle",
            opacity: "toggle"
          }, {
            duration: "slow"
          });
        $('#exp_web_section').show();
        $('#exp_web').css("color", color_hover);
        $('#exp_web').css("font-weight", 'bold');
        accueil_vis();
        var target = $('#exp_web_section').offset().top;
        $('html, body').animate({scrollTop: target}, 1000);
    }
}

export const contact_section_vis = () => {

    if ($('#contact_section').is(':visible')) {
        $('#contact_section').hide();
        $('#contact').removeAttr("style");
        accueil_vis();
    }
    else {
      
        $("#contact_section").animate({
            height: "toggle",
            opacity: "toggle"
          }, {
            duration: "slow"
          });
        $('#contact_section').show();
        $('#contact').css("font-weight", 'bold');
        $('#contact').css("color", color_hover);
        accueil_vis();
        var target = $('#contact_section').offset().top;
        $('html, body').animate({scrollTop: target}, 1000);
    }
}


const accueil_vis = () => {

    if ($('#exp_rest_section').is(':visible') || $('#diplome_section').is(':visible') || $('#contact_section').is(':visible') || $('#exp_web_section').is(':visible') || $('#form_web_section').is(':visible')) {
            $('#accueil_section').hide();
            return;
    }
    if ($('#accueil_section').is(':visible')){
        $('#accueil_section').show();
        return;
    }
    else {
        $("#accueil_section" ).animate({
            height: "toggle",
            opacity: "toggle"
          }, {
            duration: "slow"
          });
        $('#accueil_section').show();
    }
}