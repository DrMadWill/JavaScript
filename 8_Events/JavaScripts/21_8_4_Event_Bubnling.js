//** Event Bubbling
const form = document.querySelector('form')
const card_body = document.querySelector('.card-body')
const card = document.querySelector('.card')
const container = document.querySelector('.container')


    //** Icerden cole dogru olaylar tetiklenir => Event Bubbling
    // form.addEventListener('click',function(w){
    //     console.log('form')
    //     w.stopPropagation()// just occur writeline action 
    // })

    // card_body.addEventListener('click',function(w){
    //     console.log('card body')
    //     w.stopPropagation()
    // })


    // card.addEventListener('click',function(w){
    //     console.log('card')
    //     w.stopPropagation()
    // })

    // container.addEventListener('click',function(w){
    //     console.log('container')
    //     w.stopPropagation()
    // })

//** Event Capturing

    //** disdan iceri dogru olay => Event Capturing
    // form.addEventListener('click',function(w){
    //     console.log('form')
    //     // w.stopPropagation()// just occur writeline action  
    // },true)

    // card_body.addEventListener('click',function(w){
    //     console.log('card body')
    //     // w.stopPropagation()
    // },true)


    // card.addEventListener('click',function(w){
    //     console.log('card')
    //     // w.stopPropagation()
    // },true)

    // container.addEventListener('click',function(w){
    //     console.log('container')
    //     // w.stopPropagation()
    // },true)

const deleteElemnts = document.querySelectorAll('.fa-times')
const deletall = document.querySelector('#btnDeleteAll')
const ul = document.querySelector('ul')

// deleteElemnt.forEach(function(item){
//     item.addEventListener('click',function(w){
//         // console.log(w.target.parentElement.parentElement)
//         w.target.parentElement.parentElement.remove()
//         w.preventDefault()

//     })
// })

ul.addEventListener('click',function(w){
    if (w.target.className==="fas fa-times"){
        w.target.parentElement.parentElement.remove();
        w.preventDefault();
    }
})


deletall.addEventListener('click',function(w){
    deleteElemnts.forEach(element => {
        element.parentElement.parentElement.remove()
    });
    w.preventDefault()
})