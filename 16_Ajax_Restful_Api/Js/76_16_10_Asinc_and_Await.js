

async function AsyncFunction(){
    return "Not need Promise"
}


// AsyncFunction().then(res => console.log(res))

let isError = true;

function GetCategory(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (!isError){
                resolve("Phone")
            }else{
                reject("Some Error ")
            }
        },1000)
    })
}


function GetProduct(category){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`5 prodacts in ${category}`)
        },1000)
    })
}


GetCategory().then(GetProduct).then(res =>console.log(res)).catch(err => console.log(err))

async function GetProducts(){

    try{
        let category = await GetCategory();
        let result = await GetProduct(category);
        console.log(result)
    }catch(error){
        console.log(error)
    }
    
}

GetProducts()