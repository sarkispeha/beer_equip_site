var home_content_btn,
    home_content_btn_bg_hover;

var wrapper,
    home_bg_mobile,
    home_bg,
    home_bg2,
    home_bg3;

var home_content_btn1,
    home_content_btn2;

// pos & size
var posXinit;
var posYinit;
var widthInit;
var heightInit;

var widthFinal;
var heightFinal;

var posXfinal;
var posYfinal;

$(document).ready(function() {

});

/////////
//TOOLS//
/////////

function initHome() {
    wrapper = $("#wrapper");
    home_bg = $("#home_bg");
    home_bg2 = $("#home_bg2");
    home_bg3 = $("#home_bg3");

    home_content_btn = $(".home_content_btn");
    home_content_btn_bg_hover = $(".home_content_btn_bg_hover");

    home_content_btn1 = $("#home_content_btn1");
    home_content_btn2 = $("#home_content_btn2");
}

function resizeHome() {
    // adaptImageToResolution2(wrapper, home_bg_mobile);
    // adaptImageToResolution2(wrapper, home_bg);
    // adaptImageToResolution2(wrapper, home_bg2);
    // adaptImageToResolution2(wrapper, home_bg3);

    posXinit = home_bg.css("margin-left");
    posYinit = home_bg.css("margin-top");
    widthInit = home_bg.width();
    heightInit = home_bg.height();

    widthFinal = widthInit*0.95;
    heightFinal = heightInit*0.95;

    posXfinal = parseInt(posXinit) + parseInt((widthInit - widthFinal)/2);
    posYfinal = parseInt(posYinit) + parseInt((heightInit - heightFinal)/2);
}

function dezoom(elt) {
    elt.fadeIn();
    elt.animate({width: widthFinal}, {queue: false, duration: 500});
    elt.animate({height: heightFinal}, {queue: false, duration: 500});
    elt.animate({marginLeft: posXfinal}, {queue: false, duration: 500});
    elt.animate({marginTop: posYfinal}, {queue: false, duration: 500});
}

function restart(elt) {
    elt.animate({width: widthInit}, {queue: false, duration: 200});
    elt.animate({height: heightInit}, {queue: false, duration: 200, complete: function() { elt.fadeOut(); }});
    elt.animate({marginLeft: posXinit}, {queue: false, duration: 200});
    elt.animate({marginTop: posYinit}, {queue: false, duration: 200});
}