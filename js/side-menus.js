/*
Animated Side Menus
Copyright (c) 2014 Luis Enrique Arriojas
http://opensource.org/licenses/MIT
*/

var mode = "slide"; //Select a mode: "slide" or "over".
var menu = {};

$(".option").click(function() {
    menu.id = "menu-" + $(this).attr("menu");
    menu.class = $("#" + menu.id).attr("class");
    menu.width = $("#" + menu.id).outerWidth();
    sideMenu();
});

$(".option-close").click(function() {
    sideReset();
});

$("#close-button").click(function() {
    sideReset();
});

function sideMenu() { //Shows the menu
    $("#close-button").css("display", "block");

    if (menu.class == "left-menu") { //Actions for left menus.
        $("#" + menu.id).css("left", "-" + menu.width + "px");
        $("#" + menu.id).css("display", "block");
        $("#" + menu.id).animate({
            left: "+=" + menu.width
        }, 400);

        if (mode == "slide") {
            $("#main").animate({
                left: "+=" + menu.width,
                right: "-=" + menu.width,
            }, 400);
        }
    } else { //Actions for right menus.
        $("#" + menu.id).css("right", "-" + menu.width + "px");
        $("#" + menu.id).css("display", "block");
        $("#" + menu.id).animate({
            right: "+=" + menu.width
        }, 400);

        if (mode == "slide") {
            $("#main").animate({
                left: "-=" + menu.width,
                right: "+=" + menu.width,
            }, 400);
        }
    }
};

function sideReset() { //Hides the menu
    $("#close-button").css("display", "none");

    if (menu.class == "left-menu") { //Actions for left menus.
        $("#" + menu.id).animate({
            left: "-=" + menu.width
        }, 400);

        if (mode == "slide") {
            $("#main").animate({
                left: "-=" + menu.width,
                right: "+=" + menu.width,
            }, 400);
        }
    } else { //Actions for right menus.
        $("#" + menu.id).animate({
            right: "-=" + menu.width
        }, 400);

        if (mode == "slide") {
            $("#main").animate({
                left: "+=" + menu.width,
                right: "-=" + menu.width,
            }, 400);
        }
    }
};