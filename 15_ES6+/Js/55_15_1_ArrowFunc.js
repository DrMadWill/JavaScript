// Arrow Function


// ES5
let WelcomeES5 = function () {
    console.log("Welcome User")
}
// WelcomeES5()


// ES6++
let WelcomeES6 = () => {
    console.log(" Welcome User")
}
// WelcomeES6()

//ES5
let multiprametrES5 = function (x, y) {
    return x * y
}

//ES6
let multiprametrES61 = (x, y) => x * y
//or
let multiprametrES2 = (x, y) => {
    return x * y
}

//ES5
let splitES5 = function (text) {
    return text.split(" ")
}

//ES6
let splitES6 = text => text.split(" ")

//Object Lit
//ES5
let getObjES5 = function(id,name){
    return {
        id:id,
        name:name
    } 
}


//ES6
let getObjES6 = (id,name)=>({
    id:id,
    name:name
})

console.log(getObjES6(15,"Ida"))

const Phone = [
    {name: "IPhone",Price:100},
    {name: "IPhone1",Price:200},
    {name: "IPhone2",Price:300},
    {name: "IPhone5",Price:600},
    {name: "IPhone7",Price:700},
]

//ES5
let phoneES5 = Phone.map(function(phone){
    return phone.Price
})


// ES6
let phoneES6=Phone.map(phone=>phone.Price)
console.log(phoneES6)

