//* Array new usage ES+

//from

let arr = Array.from("I like it")

console.log(arr)

const Prodact = [
    {name:"Dracuala",price:300},
    {name:"One Helsing",price:500},
    {name:"One Helsing",price:500},
    {name:"Resident Evil",price:100},
    {name:"Domation Road",price:200}
]

console.log(Array.from(Prodact,prodact=>prodact))

// find
console.log(Prodact.find(x=>x.name=="Dracuala"));


// filter
console.log(Prodact.filter(x=>x.name=="One Helsing"))

// findIndex
console.log(Prodact.findIndex(x=>x.name=="Resident Evil"))


let number = ["Void","Bracker","Founder"]
let entries = number.entries()

// entries
for (let item of entries){
    console.log(item)
}

//keys
let keys = number.keys()
for (let item of keys){
    console.log(item)
}

//values
let values=number.values()

for (let item of values){
    console.log(item)
}