
$(document).ready(function () {
    $("ul li:first-child").text("Click me")
    $("ul li:first-child").click(function (w){
        w.target.className="btn bg-danger"
        $(this).text("You Click me you will be dead")
    })


});

$(function(){
    $("img").click(function(w){
        w.target.className="w-50"
    })
})