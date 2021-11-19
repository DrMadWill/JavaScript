
//**  text
// console.log($('#list').text())
// console.log($('h3').text())
// console.log($('ul li').text())
// $("#list").text("JQuery");
//$("ul li").text("JQuery")

//**  value
console.log($("#fname").val())
$('#fname').val('Will');

function fullname(w){
    let frist_name = $("#fname").val();
    let last_name = $('#lname').val();

    console.log(`Your First Name : ${frist_name} / Your Last Name : ${last_name}`);
    
    //**  addClass
    $("#fname").addClass("bg-success");

    //**  removeClass
    $("#header").removeClass("m-5");

    //**  toggleClass
    $("#header a").toggleClass("text-danger")

    //* append
    $("#list").append("<li>Learn</li>");
}

//**  attribute
// console.log($("img").attr("src"))
// console.log($("img").attr("class"))
// $("img").attr("src", "../../11_Slider_App/Img/mizrak.jpg");

//**  html
// console.log($("#list").html())
// $("#list").html("<li> My World</li>")

