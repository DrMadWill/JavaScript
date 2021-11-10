// Keyboard Event
const input = document.querySelector('#txtTaskName');
const form = document.querySelector("form")

    //** Keyboard Press
    //input.addEventListener('keydown',eventHandler)

    //** Keyboard Break up
    // input.addEventListener('keyup',eventHandler)

    //** Keyboard Press
    //input.addEventListener('keypress',eventHandler)

    //** Focus
    // input.addEventListener('focus',eventHandler)

    //** Cut -> control + x -> press
    // input.addEventListener('cut',eventHandler)

    //** Paste -> control + v -> press
    // input.addEventListener('paste',eventHandler)

    //*-* Submit 
    form.addEventListener('submit',eventHandler)

    //*-* Select 
    input.addEventListener('select',eventHandler)

    

    function eventHandler(x){
        console.log(`Event type : ${x.type} , Keyboard Code: ${x.keyCode} , Keyboard Value: ${x.target.value} `);


        // x.preventDefault()
        // x.target.style.backgroundColor='yellow'
    }