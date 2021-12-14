//* Spread Operation

function getTotal(a,b,c){
    return a+b+c
}

console.log(getTotal(10,15,25))

let numbers = [10,15,25]

// ES5
console.log(getTotal.apply(null,numbers))

// ES+
console.log(getTotal(...numbers))

let numberBy3 = [1,2,3]
let numberBy5 = [4,5,6]
let numberall = [...numberBy3,...numberBy5,7,8,9]

numberBy3.push(...numberBy5)


console.log(numberall)
