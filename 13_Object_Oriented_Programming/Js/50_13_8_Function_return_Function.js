//* Function that return function

function Question(valeu) {

    switch (valeu) {
        case "car":
            return function (name) {
                console.log(name + " do you have a car ?")
            }
        case "book":
            return function (name) {
                console.log(name + " what is favourite book ?")
            }
        case "software":
            return function (name) {
                console.log(name + " are you interested Asp.Net ?")
            }
        default:
            return function (name) {
                console.log(name + " how are you ?")
            }
    }

}


// use 
let carQuestion = Question("car")
carQuestion("Orxan")


// use 
let softwareQuestion = Question("software") 

softwareQuestion("Will")