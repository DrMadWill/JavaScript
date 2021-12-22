//! Asynchronous Javascript Callback 

let data = [
    {id: 0,name:"Doge",price:3500},
    {id: 1,name:"Runo",price:150},
    {id: 2,name:"Wolwo",price:2500}
]

function addCar(car,callback){
    setTimeout(()=>{
        data.push(car)
        callback()
    },2000)
    
}

function getData(){
    setTimeout(()=>{
        data.forEach(e=>{
            console.log(e)
        })
    },1000)
}


addCar({id: 5,name:"Hundayi",price:1800},getData)
