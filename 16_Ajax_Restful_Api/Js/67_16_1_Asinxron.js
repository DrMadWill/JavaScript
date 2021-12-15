// Asynchronous


const first1 = () =>{
    console.log("First Hello My World")
    second()
}

const second1 = () =>{
    console.log("second Hello My World")
    third() 
}


const third1 = () =>{
    console.log("third Hello My World")
}

first1()

// * Outline

// First Hello My World
// second Hello My World
// third Hello My World




const first = () =>{
    console.log("First Hello My World")
    second()
}

const second = () =>{
    setTimeout(()=>{
        console.log("second Hello My World")
    })
    third() 
}


const third = () =>{
    console.log("third Hello My World")
}

first()

// * Outline

// First Hello My World
// third Hello My World
// second Hello My World