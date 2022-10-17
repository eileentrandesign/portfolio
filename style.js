



console.log("External Javascript Connected");

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
    var pathToImage = "DSC_0256.png";

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



/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/


 function random_5(){
     var myrandom=Math.round(Math.random()*5)
     var link1="https://weathergradient.com/"
     var link2="https://checkboxrace.com/"
     var link3="http://www.workweek.info/"
     var link4="https://pointerpointer.com/"
     var link5="https://9-eyes.com/"
     var link6="https://www.youtube.com/watch?v=tDacjrSCeq4"

     if (myrandom==0)
         window.location=link1
     else if (myrandom==1)
         window.location=link2
     else if (myrandom==2)
         window.location=link3
     else if (myrandom==3)
         window.location=link4
     else if (myrandom==4)
         window.location=link5
     else if (myrandom==5)
         window.location=link6

 }

 function openInNewTab(url) {
  window.open(url, '_blank').focus();
}
