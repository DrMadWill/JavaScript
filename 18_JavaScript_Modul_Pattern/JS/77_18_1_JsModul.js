
//! 1) Global variable naming conflicts


// scrip.js
    // var name = "Eli"


// app.js
    // var name = "Ehmed"


// console.log(name)

var ehmed = (function(){
    var names = "Ehmed"
    console.log(names)
})()



var cebil = (function(){
    var names = "cebil"
    console.log(names)
})()

// console.log(names)



//! 2) Encapsulation 

var Counter = {
    number:0,
    increment:function(){
        return ++this.number
    },
    decrement:function(){
        return --this.number
    }

}

// console.log(Counter.increment())
// console.log(Counter.increment())
// console.log(Counter.decrement())
// Counter.number=10// This is problem
// console.log(Counter.decrement())


let Module = (function(){
    var number = 5
    function Increment(){
        return ++number
    }

    function Decrement(){
        return --number
    }


    return{
        Increment,Decrement
    }

})()

// console.log(number)
// console.log(Module.number)
console.log(Module.Increment())
console.log(Module.Increment())
console.log(Module.Decrement())

let Mod = (function(){

    let privateMethod = function(){
        // some amazing code
    }


    return {
        publicMethod : function(){
            return 'amazing'
        }
    }
})()

console.log(Mod.publicMethod())