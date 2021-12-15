//   Set (Collection Uniq value)

let val;
var mySet = new Set();
// create item 
mySet.add(1)
mySet.add(2)
mySet.add(2)
mySet.add(3)
mySet.add('iki')
mySet.add("iki")
mySet.add({a:2,b:3})

let obj = {
    a:2,
    b:3
}
mySet.add(obj)

//find 
val = mySet.has(2)

// delete 
mySet.delete("iki")
val = mySet.has("iki")

//update
for (let item of mySet){
    if (mySet.has(3)){
        mySet.delete(3)
        mySet.add(4)
    }
}
mySet.add("last item")

console.log("***********")

// colllection keys
for (let item of mySet.keys()){
    console.log(item)    
}

console.log("***********")

// collection values
for (let item of mySet.values()){
    console.log(item)
}

console.log("***********")

// collection keys,values
for (let [key,value] of mySet.entries()){
    console.log(key + " => " + value)
}
console.log(val)
console.log(mySet)

console.log(Array.from(mySet))
let mySet2 = new Set([1,2,3,4])


// intersection
// let intersect = new Set(Array.from(mySet).filter(x=>mySet2.has(x)))
// console.log(intersect)

//or

let intersect = new Set([...mySet].filter(x=>mySet2.has(x)))
console.log(intersect)



// diffrence
let deffrence = new Set([...mySet].filter(x=>!mySet2.has(x)))
console.log(deffrence)
