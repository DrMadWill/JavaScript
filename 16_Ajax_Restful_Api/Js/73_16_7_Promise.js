//! Promise


let data = [
    {id: 0,name:"Doge",price:3500},
    {id: 1,name:"Runo",price:150},
    {id: 2,name:"Wolwo",price:2500}
]


function add(prodact,callback){
    return new Promise(function(resolve,reject){
        data.push(prodact)
        let added = false

        if (added){
            resolve();
        }else{
            reject('error : 500');
        }
    })
}


function getProdact(){
    setTimeout(() => {
       data.forEach(e=>console.log(e.name)) 
    }, 1000);
}

add({id:4,name:'Tesla',price:3000}).then(getProdact).catch(e=>console.log(e))