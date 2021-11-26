
$(document).ready(function () {
    $("#show").click(function () {
        $("h2").show("slow",function(){
            $(this).text("You Success")
        });
    })

    $("#hide").click(function () {
        $("h2").hide(1000,function(){
            alert("You Click Hide")
        });
    })

    $("#toggle").click(function(){
        $("h2").toggle(500);
    } )

});