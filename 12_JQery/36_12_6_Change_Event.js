$(document).ready(function () {
    $("#selec").change(function(){
        console.log($(this).val())
    })
    $("input").change(function(){
        console.log($(this).val())
    })
});