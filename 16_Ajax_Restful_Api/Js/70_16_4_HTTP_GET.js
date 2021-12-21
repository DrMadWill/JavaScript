document.getElementById('here').innerHTML = `
<div class="input-group col-3 mb-3">
    <input type="text" id="postid" class="form-control" aria-describedby="getData">
    <div class="input-group-append">
        <button type="button" class="btn btn-primary" id="getOne"> Get One</button>
        <button type="button" class="btn btn-success" id="getAll"> Get All</button>
    </div>
</div>
`

$(document).ready(function () {

    document.getElementById('getOne').addEventListener('click',getOne)
    document.getElementById('getAll').addEventListener('click',getAll)

    function getOne(){

        let id = document.getElementById('postid').value;
        var url = "https://jsonplaceholder.typicode.com/posts/" + id
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET',url,true);
        xhr.onload = function () {
            if (this.status === 200){
                // console.log(this.responseText)
                let postitem = JSON.parse(this.responseText)
                // console.log(postitem)
                let html = `
                <div class="card m-4" style="width:30rem;">
                    <div class="card-header">${postitem.title}</div>
                    <div class="card-body">
                    ${postitem.body}
                    </div>
                    <div class="card-footer">${postitem.id}</div>
                </div>
              `
                document.querySelector("#sumcard").innerHTML=html;
            }
        }

        xhr.send();
    }


    function getAll(){
        var url = "https://jsonplaceholder.typicode.com/posts"
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET',url,true);
        xhr.onload = function () {
            if (this.status === 200){
                // console.log(this.responseText)
                let postitem = JSON.parse(this.responseText)
                // console.log(postitem)
                let html = ""

                postitem.forEach(item =>{
                    html+=`
                    <div class="card m-4" style="width:30rem;">
                      <div class="card-header">${item.title}</div>
                      <div class="card-body">
                        ${item.body}
                      </div>
                      <div class="card-footer">${item.id}</div>
                    </div>
                    `
                } )

                document.querySelector("#sumcard").innerHTML=html;
            }
        }

        xhr.send();

    }

})