//* Fade

// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("h2").fadeOut("slow")
//     })

//     $("#show").click(function(){
//         $("h2").fadeIn("slow")
//     })

//     $("#toggle").click(function(){
//         $("h2").fadeToggle()
//     })
// })

//*Slide

$(document).ready(function () {
    $("#hide").click(function(){
        $("h2").slideUp();("slow")
    })
        
    $("#show").click(function(){
        $('h2').slideDown('slow');
    })
        
    $("#toggle").click(function(){
        $("h2").slideToggle();('slow')
    })
});
