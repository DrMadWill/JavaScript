// Add Element

const form = document.querySelector('#addTaskList');
const input = document.querySelector("#text_go");
const deleteAll = document.querySelector("#btnDeletAll")
const list = document.querySelector("#list");
const data = ["item 1","item 2","item 3","item 4"]
loadItem()

addEventListener()

function addEventListener(){

    form.addEventListener('submit',addList)
    list.addEventListener('click',deleteItem)
    deleteAll.addEventListener('click',deleteallitem)
    

}

// Create Element
function createItem(text){
    // create li
    const li = document.createElement('li');;
    li.className="list-group-item d-flex justify-content-between list-group-item-secondary"
    li.appendChild(document.createTextNode(text)) 

    // create a
    const a = document.createElement('a');
    a.className="btn btn-outline-danger delete-item";
    a.innerHTML=`<i class="fas fa-times"></i>`

    li.appendChild(a);
    list.appendChild(li)
    input.value=''
}

// Load Items
function loadItem(){
    data.forEach(e=>{
        createItem(e)
    })
}

// Add Element
function addList(w){
    if(input.value.trim() == ""){
        alert("Please add new item")
    }else{
        createItem(input.value)
    }
    

    w.preventDefault();
    // list.appendChild('')
}

// Delete Item
function deleteItem(w){
    
    if (w.target.className == "fas fa-times"){
        if (confirm("Are you sure ?")){
            w.target.parentElement.parentElement.remove();
        }
        
    }else if(w.target.className=="btn btn-outline-danger delete-item"){
        if (confirm("Are you sure ?")){
            w.target.parentElement.remove();
        }
    }
    
    w.preventDefault();
}

// DeleteAll
function deleteallitem(w){

    if (confirm("Are you sure ?")){
        list.innerHTML=""
    }
    

    w.preventDefault();

}