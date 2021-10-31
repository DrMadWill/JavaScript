// Creating Elements

    // create elemnt
    const p=document.createElement("p");

    // add Class
    p.className="list-group-item list-group-item-secondary";

    // add Attribute
    p.setAttribute("title", "p element ")

    // add text node
    const text=document.createTextNode("New item")

    // add Element (tag)
    p.appendChild(text)

console.log(p);