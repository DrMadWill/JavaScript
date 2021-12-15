// Map

let value;
const numbers = new Map();
// create
numbers.set(2,"one")
numbers.set(1,"two")
numbers.set("two","two")

// read
value = numbers;
value = numbers.get(1)
value = numbers.get(2);
value = numbers.get("two");
// length
value = numbers.size
// find
value = numbers.has(1)
// delete
value = numbers.delete(1)
value = numbers.has(1)
// all delete
 //numbers.clear()

// console.log(value)

for(let [key,value] of numbers ){
    console.log(key + " = " + value)
}

//keys
for(let key of numbers.keys() ){
    console.log(key)
}

let first = new Map([
    [1,"one"],
    [2,"two"],
    [3,"three"]
])


let second = new Map([
    [4,"four"],
    [5,"five"],
    [6,"six"],
    [7,"seven"]
])

let numb=new Map([...first,...second])
console.log(numb)
