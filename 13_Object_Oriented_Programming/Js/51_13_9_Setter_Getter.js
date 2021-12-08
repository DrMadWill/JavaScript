//* Encapsulation

// *Spimple Exp

// const Person = {
//     names: 'Will',
//     surname: 'Mad',
//     GetFullName:function(){
//         return `${this.surname} ${this.names}`
//     },
//     SetFullName:function(value){
//         let post=value.split(" ");
//         this.names = post[0]
//         this.surname = post[1]
//     }

// }

// console.log(Person.GetFullName())
// Person.SetFullName("Damtion Road")
// console.log(Person.GetFullName())



//* We use


// const Person = {
//     names: 'Will',
//     surname: 'Mad',
//     get FullName(){
//         return `${this.surname} ${this.names}`
//     },
//     set FullName(value){
//         let post=value.split(" ");
//         this.names = post[0]
//         this.surname = post[1]
//     }

// }

// console.log(Person.FullName)
// Person.FullName = 'Damtion Road'
// console.log(Person.FullName)

// or


const Person ={
    names: "Bartas",
    surename: "Deleveqa",
}

Object.defineProperty(Person,"fullname",{
    get(){
        return `${this.surname} ${this.names}`
    },
    set(value) {
        let post=value.split(" ");
        this.names = post[0]
        this.surname = post[1]
    }
})


console.log(Person)
Person.FullName = 'Damtion Road'
console.log(Person.FullName)



Object.defineProperty(Person,'age',{
    value:25 // not writable
})

Person.age=21

console.log(Person.age)

Object.defineProperty(Person,'job',{
    value:"Damtion", // not writable
    writable:true
})

Person.job="Teacher"

console.log(Person.job)
