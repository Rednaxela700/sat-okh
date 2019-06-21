$(document).ready(function() {

    $(".header").addClass("animated fadeIn");
    $("#image-1").addClass("animated slideInUp");
    $("button").removeClass("btn-default");
});
$("img").click(function() {
    var img = $(".list-img");

    if (img.width() < 50)
    {
        img.animate({width: "200px", height: "200px"}, 1000);
    }
    else 
    {
        img.animate({width: img.attr("width"), height: img.attr("height")}, 1000);
    }
});