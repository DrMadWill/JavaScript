// Traversing the Dom

let drmw
let ace = document.querySelector('.list-group');

drmw=ace;

drmw=ace.childNodes // return text nodes

drmw=ace.children;

drmw=ace.children[0].textContent="Please"
drmw = ace.children[1].children;
drmw=ace.firstChild;// text node
drmw=ace.lastChild//text node
drmw=ace.firstElementChild.innerText='Hover'// return first element
drmw=ace.lastElementChild.style.color="yellow" // return last element

drmw=ace.children[1].parentElement// bir ust element;
drmw=ace.children[1].parentNode;//text node

drmw=ace.children[2].previousSibling // previous element same level 
drmw=ace.children[2].previousElementSibling // previous same level 

drmw=ace.children[2].nextSibling // next element some level 
drmw=ace.children[2].nextElementSibling// next element some level


let element;
for (let i = 0; i < ace.childNodes.length; i++) {
    if(ace.childNodes[i].nodeType==1){
        console.log(ace.childNodes[i])
    }
}


// console.log(drmw)
