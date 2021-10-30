// Select Single 
let wil;

    //getElementById()
    wil=document.getElementById('header') //  variable assignment HTML element
    // wil=document.getElementById('header').id;
    // wil=document.getElementById('header').className;

    // wil=wil.id;
    // wil=wil.className;

    wil.style.color='red'
    wil.style.height='45px'
    wil.style.fontWeight='bold'

    document.getElementById('header').innerText="Domation of Road"
    document.getElementById('header').innerHTML="<b>Domation of Road</b>"

    // console.log(document.querySelector("#header"))
    // console.log(document.querySelector('.card-header'))
    document.querySelector('li').style.color='red'
    document.querySelector('li:last-child').style.color='green'
    document.querySelector('li:nth-child(2)').style.color="blue"
    document.querySelector('li:nth-child(3)').textContent='This Like mad';
    
    document.querySelector("li:last-child").classList.add('active')



// console.log(wil)


