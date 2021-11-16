// Add Element

const form = document.querySelector('#addTaskList');
const input = document.querySelector("#text_go");
const deleteAll = document.querySelector("#btnDeletAll")
const list = document.querySelector("#list");
let data;

loadItem()

addEventListener()

function addEventListener(){

    form.addEventListener('submit',addList)
    list.addEventListener('click',deleteItem)
    deleteAll.addEventListener('click',deleteallitem)
    

}

//* Create Element
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

//* Load Items
function loadItem(){
    data = getItemLCS()
    data.forEach(e=>{
        createItem(e)
    })
}

//* Add Element
function addList(w){
    
    if(input.value.trim() == ""){
        alert("Please add new item")
    }else{
        let text = input.value

        //create element
        createItem(text)

        // seve to LCS
        setItemLCS(text)
    }
    w.preventDefault();
}

//* Delete Item
function deleteItem(w){
    
    if (w.target.className == "fas fa-times"){
        if (confirm("Are you sure ?")){
            w.target.parentElement.parentElement.remove();
            removeLCS(w.target.parentElement.parentElement.textContent)
        }
        
    }else if(w.target.className=="btn btn-outline-danger delete-item"){
        if (confirm("Are you sure ?")){
            w.target.parentElement.remove();
            removeLCS(w.target.parentElement.textContent)
        }
    }
    
    w.preventDefault();
}

//* DeleteAll
function deleteallitem(w){

    if (confirm("Are you sure ?")){
        list.innerHTML=""
        localStorage.clear();
    }
    

    w.preventDefault();

}


//* Local Storage (LCS)
function getItemLCS(){
    data = [];
    if(localStorage.getItem("items") != null){
        data = JSON.parse(localStorage.getItem("items"))
    }
    return data;
}

//* Set Item LCS
function setItemLCS(text){
    data = getItemLCS();
    data.push(text)
    localStorage.setItem("items",JSON.stringify(data))
}

//* Remove LCS
function removeLCS(text){
    data = getItemLCS()

    data.forEach(function(item,index){
        if (item == text){
            data.splice(index,1)
        }
    })

    localStorage.setItem("items",JSON.stringify(data))
}