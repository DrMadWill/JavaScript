// Ajax 

let xhr = new XMLHttpRequest();

// Serecer Changer State
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        if (xhr.status === 200){
            console.log(xhr.responseText)
        }else if (xhr.status === 404){
            console.log("Not Found This Information")
        }   
    }
}

// Proses in Continuo Time
xhr.onprogress = function(){
    console.log("This is Prosesing Inormation ")
}

// Server Conect
xhr.open("GET",'msg.txt',true)
xhr.send()

console.log("Proses")
