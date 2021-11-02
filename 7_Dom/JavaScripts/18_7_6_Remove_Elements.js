// Remove Elements

const list=document.querySelector('#task-list');
const parens=document.querySelector('.card')
const cardHed=document.querySelector('.card-header')
const h1 = document.createElement('h1');
h1.setAttribute('class','card-header')
h1.innerText="My World"
    // **removing element 
    //list.remove(); // remove method
    // list.childNodes[1].remove();
    // list.removeChild(list.children[1]);

    // **removing attribute
    //list.childNodes[1].removeAttribute("class");

    //**  replacing element
    parens.replaceChild(h1,cardHed) 














