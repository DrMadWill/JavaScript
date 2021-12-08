//* Call ,Apply and Bind Function

// * No arguments
let Welcom = function () {
    console.log("Welcome " + this.name)
}

let orxan = {name:"Orxan"}
let ali = {name:"Ali"}

//call
Welcom.call(orxan)
Welcom.call(ali)

//apply
Welcom.apply(orxan)
Welcom.apply(ali)

//bind
let bindorxan = Welcom.bind(orxan)
bindorxan()
let bindali = Welcom.bind(ali)
bindali()



// * Arguments Use
let WelcomArg = function (a,b) {
    console.log("Welcome " + this.name+". Do yo Like "+a+" or "+b)
}


//call
WelcomArg.call(orxan,"Angular","Asp.net")
WelcomArg.call(ali,"Js","Python")

//apply
WelcomArg.apply(orxan,["Angular","Asp.net"])
WelcomArg.apply(ali,["Js","Python"])

//bind 
let bind1=WelcomArg.bind(orxan)
bind1("Angular","Asp.net")

let bind2 = WelcomArg.bind(ali)
bind2("Js","Python")




