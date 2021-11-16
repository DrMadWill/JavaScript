// Add Element

const form = document.querySelector('#addTaskList');
const input = document.querySelector("#text_go");
const deleteAll = document.querySelector("#btnDeletAll")
const list = document.querySelector("#list");



addEventListener()

function addEventListener(){
    form.addEventListener('submit',addList)
}




// Add Element

function addList(w){
    if(input.value.trim() == ""){
        alert("Please add new item")
    }
    
    let item = `
    <li class="list-group-item d-flex justify-content-between list-group-item-secondary">${input.value.trim()}
    <a href="#" class="delete-item float-right">
        <i class="fas fa-times"></i>
    </a>
    </li>`
    const div = document.createElement('div')
    div.innerHTML=item;
    list.appendChild(div)
    input.value=''

    w.preventDefault();
    // list.appendChild('')
}