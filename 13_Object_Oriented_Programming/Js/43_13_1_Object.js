
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
// console.log(student2)
// console.log(student2.BirthYear())

//** Inheritance

class Person {
    constructor(name,yearOfBirth,job){
        this.name=name
        this.yearOfBirth=yearOfBirth
        this.job=job

        this.CaculateAge=function(){
            let date =new Date
            return date.getFullYear() - this.yearOfBirth
        }
    }
}


Person.prototype.GetName=function(){
    return this.name
}

Person.prototype.lastName="Domation of Road"



let mad = new Person("Mad",15,"Developer")
let will = new Person("Will",21,"Wayer")


// console.log(mad)
// console.log(mad.lastName)
// console.log(mad.CaculateAge())

// console.log("*********************")

// console.log(will)
// console.log(will.lastName)
// console.log(will.GetName())


function Employe(name,salary){
    if (!(this instanceof Employe)){ // cadition new keyword not use
        return new Employe(name,salary)
    }
    this.name=name;
    this.salary=salary;
}

Employe.prototype.caculateSalary=function(){
    let month = new Date().getMonth()+1
    let tax = 0 ;
    var total = this.salary*month;

    if (total<=2000){
        tax=total*0.2;
    }else if (total > 2000 && total <= 3000){
        tax=total*0.25;
    }else{
        tax=total*0.3
    }

    return {
        tax : tax,
        pad : total - tax
    }



}

var emp1= Employe("Samir",3000)
console.log(emp1)
console.log(emp1.caculateSalary())
let salary1=emp1.caculateSalary()
console.log("*************")

var emp2=new Employe("Sadiq",4000)
console.log(emp2)
console.log(emp2.caculateSalary())


console.log(` ${emp1.name} adlı şəxs tam ${salary1.tax} ilə vergi kəslimiş və qalan məbləğ ${salary1.pad} dir`)