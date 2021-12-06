
//* Testing
console.log("Hello")


let num;
num = 10; // Primitive yalnız bir dəyər tutur başqa fuksiyası yoxdur

// Object Litreal
let student={ // Object müəyyən bir funksiyası var, birden çox dəyər tutur.
    id:"15a",
    name:"Ali",
    age:15,
}

//* Funcition Ctor

// Funcition Decleration

// function Student(id,name,age) { // Constroctor Define
//     this.id=id;
//     this.name=name;
//     this.age=age;

//     this.BirthYear=function(){
//         let date=new Date
//         return date.getFullYear() - this.age
//     }

// }

// Funcition Expration

// let Student=function(id,name,age){
//     this.id=id;
//     this.name=name;
//     this.age=age;

//     this.BirthYear=function(){
//         let date=new Date
//         return date.getFullYear() - this.age
//     }
// }

// Class use

class Student{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    BirthYear=function(){
        let date=new Date
        return date.getFullYear() - this.age
    }
}

let student2=new Student("15b","Sakura",15); // instance
console.log(student2)
console.log(student2.BirthYear())







