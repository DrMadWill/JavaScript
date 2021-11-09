// Keyboard Event
const input = document.querySelector('#txtTaskName');
    
    //** Keyboard Press
    input.addEventListener('keydown',eventHandler)

    //** Keyboard Break up
    input.addEventListener('keyup',eventHandler)

    function eventHandler(x){
        console.log(`Event type : ${x.type}`);
    }