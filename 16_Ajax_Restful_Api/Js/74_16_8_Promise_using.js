



// let promis = new Promise((resolve,reject)=>{
//     if(false){
//         resolve('sucess')
//     }else{
//         reject('Invalid')
//     }
// })

// promis.then(e=>console.log(e)).catch(e=>console.log(e))

let myObj = {
    // method:"POST",
    url : "https://randomuser.me/api/?results=5"
    // headers : {"Content-Type":"application/json"}

}


let request = Obj=>{
    return new Promise((resolve,reject)=>{

        let xhr = new XMLHttpRequest();
        xhr.open(myObj.method || "GET",myObj.url)

        if (xhr.headers){
            Object.keys[Obj.headers].forEach(key=>{
                xhr.setRequestHeader(key,Obj.headers[key])
            })
        }

        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response)
            }else{
                reject(xhr.statusText)
            }
        }

        xhr.onerror=()=>{
            reject(xhr.statusText)
        }

        xhr.send(Obj.body);

    })
}





let Html_Bild = data=>{
    let users = JSON.parse(data);
    let html = ""

    users.results.forEach(user=>{
        html+=`
        <div class="card col-3" style="width:13rem;">
            <img src="${user.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
        </div>
        `
    })

   let here = document.querySelector('#here')
   here.setAttribute('class',"mt-2 row")
   here.innerHTML=html

   return Promise.resolve("HTML Loaded.")
}

request(myObj)
.then(Html_Bild)
.then(msg=>console.log(msg))
.catch(error=>console.log(error))
