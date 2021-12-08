// * Error Handling



// ReferenceError

try {
    console.log(wilFunction());

} catch (error) {
    console.log(error.message)
    console.log(error.name)

    console.log(error instanceof ReferenceError)
    console.log(error instanceof TypeError)
}


console.log("+++++++++++++++++++++++")


let wil = {
    name:"Lider"
}

try {
    console.log(wil.surename)// underfind
    if (!surename){
        // throw new SyntaxError("User has no email");
        throw new TypeError("User has no email");
    }
} catch (error) {
    console.log(error)
    console.log(error.message)
    console.log(error.name)//Referance Error
} finally {
    console.log("finally block every time using")
}











