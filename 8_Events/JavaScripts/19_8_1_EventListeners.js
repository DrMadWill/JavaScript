// Event Listeners
let value;
const btn = document.querySelector("#btnDeleteAll");

    // **Add Event Listener
    btn.addEventListener('click',function(click_moment){
        
        value=click_moment.target;
        value=click_moment.target.id;
        value=click_moment.target.className;

        
        console.log(value)

        click_moment.preventDefault;
    })


    // function btnclick(){
    //     console.log("I clicked")
    // }
    // btn.addEventListener('click',btnclick)

