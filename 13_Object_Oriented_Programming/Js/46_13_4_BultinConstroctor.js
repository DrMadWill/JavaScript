//* Use Constructor

//* String
// Primitive Type
let str = "orxan"

// Object Type
let str2 = new String("orxan");


//* Number
// Primitive Type
let num = 123

// Object Type
let num2 = new Number(123);


//* Bool
// Primitive Type
let bol = true

// Object Type
let bol2 = new Boolean(true);

//*Array
let arr = [1,23,6]

let arr2 = new Array(1,23,6)


//* Bult-in Constructor

let str3 = "Javad"
String.prototype.isJavad = function(){//new string method add.
    if (this =="Javad"){
        return true
    }else{
        return false
    }
}

let arry = ["Barca","Bartos","Boracina"]
Array.prototype.remove=function(name){ // new array method add
    let index = this.indexOf(name)

    if (index != null){
        this.splice(index,1)
    }

    return this
}


console.log(str3.isJavad())
console.log("******")
console.log(arry)
console.log(arry.remove("Barca"))
