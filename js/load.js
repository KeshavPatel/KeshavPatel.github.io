function loadMe(words, color, guts)
{
    $("#me").fadeOut("2s");
    $("#resume").fadeOut("2s");
    $("#another").fadeOut("2s");
    $("#yup").fadeOut("2s");
    $("h1").fadeOut(".1s");
    setTimeout(function()
    {
        $("h1").text(words);
    }, 500);
    $("h1").fadeIn("1s");
    $("body").animate({backgroundColor: color}, "2s");
    $("#back").fadeIn("2s");
    $("#content").load(guts);
    setTimeout(function()
    {
        $("#content").fadeIn("1s");
    }, 1000);
    return false;
}

function index()
{
    $("#me").fadeIn("2s");
    $("#resume").fadeIn("2s");
    $("#another").fadeIn("2s");
    $("#yup").fadeIn("2s");
    $("#back").fadeOut("2s");
    $("#content").fadeOut("2s");
    $("h1").fadeOut(".1s");
    setTimeout(function()
    {
        window.scrollTo(0, 0);
    }, 400);
    setTimeout(function()
    {
        $("h1").text("KESHAV");
    }, 500);
    $("h1").fadeIn("1s");
    $("body").animate({backgroundColor: "#60b6e8"}, "2s");
    $("#content").empty();
    return false;
}

$(document).ready(function()
{
    $("#back").fadeOut("1ms");
    $("#content").fadeOut("1ms");
    $("#me").click(function()
    {
        loadMe("About Me", "#69ffbb");
    });
    $("#resume").click(function()
    {
        loadMe("Resume", "#76f0ff");
    });
    $("#another").click(function()
    {
        loadMe("Current Work", "#69a0ff");
    });
    $("#yup").click(function()
    {
        loadMe("Contact", "#60e8d1", "../contact.html");
    });
    $("#back").click(function()
    {
        index();
    });
});
