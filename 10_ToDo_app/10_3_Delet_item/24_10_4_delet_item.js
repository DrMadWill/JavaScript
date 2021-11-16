// Add Element

const form = document.querySelector('#addTaskList');
const input = document.querySelector("#text_go");
const deleteAll = document.querySelector("#btnDeletAll")
const list = document.querySelector("#list");



addEventListener()

function addEventListener(){

    form.addEventListener('submit',addList)
    list.addEventListener('click',deleteItem)
    deleteAll.addEventListener('click',deleteallitem)
    

}




// Add Element

function addList(w){
    if(input.value.trim() == ""){
        alert("Please add new item")
    }else{
        // create li
        const li = document.createElement('li');;
        li.className="list-group-item d-flex justify-content-between list-group-item-secondary"
        li.appendChild(document.createTextNode(input.value)) 

        // create a
        const a = document.createElement('a');
        a.className="btn btn-outline-danger delete-item";
        a.innerHTML=`<i class="fas fa-times"></i>`
        
        li.appendChild(a);
        
        
        
        list.appendChild(li)
        input.value=''
    }
    

    w.preventDefault();
    // list.appendChild('')
}

// Delet Item
function deleteItem(w){

    if (w.target.id == "btnDeletAll"){
        console.log("i can do this")
    }
    
    if (w.target.className == "fas fa-times"){
        w.target.parentElement.parentElement.remove();
    }else if(w.target.className=="btn btn-outline-danger delete-item"){
        w.target.parentElement.remove();
    }
    
    w.preventDefault();
}


function deleteallitem(w){

    if (confirm("Are you sure ?")){
        list.innerHTML=""
    }
    

    w.preventDefault();

}