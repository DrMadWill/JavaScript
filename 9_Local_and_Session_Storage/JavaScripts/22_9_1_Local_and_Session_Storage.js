//** Local Storage

let val
//*AllRemove
val=localStorage.clear()
// *Add
const fristname = localStorage.setItem('Fristname','Mad');
const lastnaem = localStorage.setItem('Lastname','Will');
//*Get item
val = localStorage.getItem('Fristname')
val = localStorage.getItem('Lastname')

//* Remove Item
val = localStorage.removeItem('Fristname')
val = localStorage.removeItem('Lastname')

console.log(val)
console.log(localStorage)
//** Session Storage
// const app = sessionStorage.setItem('will',"like anime")
// console.log(sessionStorage)

