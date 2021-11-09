// Move Events
const btn=document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');


    // ** click => 1 click
    // btn.addEventListener('click',eventHandler);
    // ul.addEventListener('click',eventHandler);

    //** double click
    //btn.addEventListener('dblclick',eventHandler)

    //** Mouse Down -> mouse on the right click -> keep
    // btn.addEventListener('mousedown',eventHandler)

    // //** Mouse Up -> mouse on the right click -> break up
    // btn.addEventListener('mouseup',eventHandler)

    // //** Mouse Enter -> Enter Container
    // ul.addEventListener('mouseenter',eventHandler);

    // //** Mouse Leave -> Leave Container
    // ul.addEventListener('mouseleave',eventHandler)


    // //** Mouse Over -> Include element belonging 
    // ul.addEventListener('mouseover',eventHandler)

    // //** Mouse Out -> Include element belonging 
    // ul.addEventListener('mouseout',eventHandler)

    //** Mouse Move 
    ul.addEventListener('mousemove',eventHandler)

    const h5 = document.querySelector('h5');
    

    function eventHandler(event){
        console.log(`event type : ${event.type}`);

        h5.textContent=`Mouse X: ${event.offsetX} Y: ${event.offsetY}`

        event.preventDefault()
    }