// Events in JQuery
// Mouse Events = click, dblclick, mouseenter, mouseleave, mouseover, mouseout, mousedown, mouseup, hover
// Keyboard Events = keydown, keyup, keypress
// Form Events = submit, change, focus, blur, select
// Document/Window Events = load, resize, scroll, unload

// 1. Mouse Events
$(document).ready(function () {
    $("#p").dblclick(function () {
        console.log("Double Clicked");
        $(this).css("color", "red");
    });

    $("#l1").hover(function () {
        console.log("Hovered");
        $(this).css("color", "red");
    });

    // 2. Keyboard Events
    $("#l2").keypress(function () {
        console.log("Key Pressed");
        $(this).css("color", "red");
    });

    $("#l2").keydown(function () {
        console.log("Key Down");
        $(this).css("color", "red");
    });

    // 3. Form Events
    $("#t1").focus(function () {
        console.log("Focused");
        $(this).css("color", "red");
    });

    $("#t1").blur(function () {
        console.log("Blurred");
        $(this).css("color", "red");
    });

    // 4. Document/Window Events

    $(window).resize(function () {
        console.log("Window Resized");
    });

    $(window).scroll(function () {
        console.log("Window Scrolled");
    });

    $(window).load(function () {
        console.log("Window Loaded");
    });


    $(".d1").hide(2000, function () {
        console.log("Div Hidden in 2 Seconds");
    })
    $(".d1").show(2000, function () {
        console.log("Div Shown in 2 Seconds");
    })
});