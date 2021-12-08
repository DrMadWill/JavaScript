// * Immediate Function


// Don't usfull this  
function welconme(){
    let day=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let value = `Wlcome. Today is ${day[new Date().getDay()]}`
    console.log(value)
}

// welconme()

//* We Use


// (function(){
    ////some amazing code
// })();

// or

// (function(){
    ////some amazing code
// }())

// using
(function(name){
    let day=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let value = `Wlcome ${name}. Today is ${day[new Date().getDay()]}`
    console.log(value)
}("Will"))


