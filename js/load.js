function loadMe(words, color)
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
    return false;
}


$(document).ready(function()
{
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
        loadMe("Another Page", "#69a0ff");
    });
    $("#yup").click(function()
    {
        loadMe("Yup", "#60e8d1");
    });
});
