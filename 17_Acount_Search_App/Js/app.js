let html = `
    <nav class="navbar navbar-dark bg-danger mb-3">
        <div class="container">
            <a href="" class="navbar-brand">
                Profile Finder
            </a>
        </div>
    </nav>

    <div class="container">
        <div class="card">
            <div class="card-body">
                <h2> Profile Finde</h2>
                <p class="lead"> 
                    Start typing to find a profile
                </p>
            </div>
            <div class="p-3">
                <input type="text" id="searchProfile" class="form-control">
                <span id="alert" class="bg-danger"></span>
            </div>
            <div id="profileContainer" class="p-3">
                
            </div>
        </div>

    </div>
`

document.querySelector('body').innerHTML = html;


$(document).ready(function () {

    const profile = new Profile();
    const ui = new UI();
    const searchProfile = document.querySelector('#searchProfile')

    searchProfile.addEventListener("keyup",(w)=>{
        ui.Clear()
        let info = w.target.value

        if (info != ""){
            profile.getProfile(info).then(res => {
                if (res.length === 0){
                    ui.AlertInfo(info)
                    console.log(info)
                }else{
                    ui.ShowProfile(res.profile[0]);
                    ui.ShowToDo(res.todo)
                }
            }).catch(error => ui.AlertInfo(info))
        }

    })




});

