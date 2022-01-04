
class UI{
    constructor(){
        this.profileContainer = document.getElementById('profileContainer'),
        this.alert = document.getElementById('alert')
    }

    ShowProfile(profile){
        this.profileContainer.innerHTML = "No Profile"
        this.profileContainer.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3 ">
                            <img src="https://picsum.photos/200/300" class="img-thumbnail m-auto" alt="">  
                        </div>

                        <div class="col-md-9">
                            <h4> Contact</h4>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    Name : ${profile.name}
                                </li>

                                <li class="list-group-item">
                                    User Name : ${profile.username}
                                </li>

                                <li class="list-group-item">
                                    Email : ${profile.email}
                                </li>

                                <li class="list-group-item">
                                    Address : ${profile.address}
                                    ${profile.address.street}
                                    ${profile.address.suite}
                                    ${profile.address.city}
                                </li>

                                <li class="list-group-item">
                                    Phone : ${profile.phone}
                                </li>

                                <li class="list-group-item">
                                    Website : ${profile.website}
                                </li>
                            </ul>
                            <h4 class="mt-3"> To Do List</h4>
                            <ul id="todo" class="list-group">
                            
                            </ul>
                        </div>

                    </div>
                    
                </div>
            </div>
        `
    }

    AlertInfo(text){
        this.alert.innerHTML=`${text} is not found`
    }

    Clear(){
        this.alert.innerHTML=""
        this.profileContainer.innerHTML=""
    }

    ShowToDo(info){

        let html=""
        
        info.forEach((element)=>{
            if(element.completed){
                html+=`
                <li class="list-group-item bg-success">
                    ${element.title}
                </li>
                `
            }else{
                html+=`
                <li class="list-group-item bg-secondary">
                    ${element.title}
                </li>
                `
            }
        })

        this.profileContainer.querySelector('#todo').innerHTML=html;


    }

}


