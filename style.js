$(document).ready(function () {
    var yOff = 15;
    var xOff = -20;
    var pathToImage = "turk.jpeg";

    $(".text-hover-image").hover(function (e) {
        $("body").append("<p id='image-when-hovering-text'><img src='" + pathToImage + "'/></p>");
        $("#image-when-hovering-text")
            .css("position", "absolute")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px")
            .fadeIn("fast");
    },

    function () {
        $("#image-when-hovering-text").remove();
    });

    $(".text-hover-image").mousemove(function (e) {
        $("#image-when-hovering-text")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px");
    });
});

$(document).ready(function () {
    var yOff = 15;
    var xOff = -20;
    var pathToImage = "me.jpeg";

    $(".text-hover-image-me").hover(function (e) {
        $("body").append("<p id='image-when-hovering-text'><img src='" + pathToImage + "'/></p>");
        $("#image-when-hovering-text")
            .css("position", "absolute")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px")
            .fadeIn("fast");
    },

    function () {
        $("#image-when-hovering-text").remove();
    });

    $(".text-hover-image-me").mousemove(function (e) {
        $("#image-when-hovering-text")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px");
    });
});
