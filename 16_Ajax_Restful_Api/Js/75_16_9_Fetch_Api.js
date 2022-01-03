//! Fetch Api

// Text
function getText() {
    fetch('msg1.txt')
        .then(response => {
            return response.text()
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

// getText()


//JSON

function getJson() {
    fetch('employnesssss.json')
        .then(response => {

            console.log(new XMLHttpRequest())

            console.log("Error :", response.status)
            return response.json()
        })
        .then(data => console.log(data.employnes))
        .catch(err => console.log(err))
}

// getJson()


// External Api

function getExternalApi() {
    fetch("https://randomuser.me/api/?results=5")
        .then(data => {
            return data.json()
        })
        .then(info => InfoPrint(info))
        .catch(err => console.log(err))
}

function InfoPrint(info) {
    let html = ""
    info.results.forEach(user => {
        html += `
        <div class="card col-3" style="width:13rem;">
            <img src="${user.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title a</p>
            </div>
        </div>
        `
    })
    let here = document.querySelector('#here')
    here.setAttribute('class', "mt-2 row")
    here.innerHTML = html
}

// getExternalApi()


// Post

function postExternalApi() {
    
    const url = "https://jsonplaceholder.typicode.com/todos"

    let data = {
        method:"POST",
        body: JSON.stringify({
            userId : "1",
            title : "Simple code ",
            body : "Become Simple"
        }),
        headers : new Headers({
            "Content-Type":"application/json"
        })
    }
    fetch(url,data).then(res => console.log(res))
}

postExternalApi()
