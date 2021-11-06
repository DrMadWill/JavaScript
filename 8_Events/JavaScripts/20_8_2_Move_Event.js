// Move Events
const btn=document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');


    // click => 1 click
    // btn.addEventListener('click',eventHandler);
    // ul.addEventListener('click',eventHandler);

    // dbclick
    btn.addEventListener('dbclick',eventHandler)

    function eventHandler(event){
        console.log(`event type : ${event.type}`);
        event.preventDefault()
    }