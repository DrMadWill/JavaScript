// Callback Function 

// let valu;

// function MultiplayByTwo(a,b,c){
//     let arr=[]
//     for (let i=0; i<3;i++){
//         arr[i]=arguments[i]*2
//     }
//     return arr;
// }


// function AddOne(a){
//     return a+1;
// }

// valu=MultiplayByTwo(5,9,6)

// console.log(valu)
// // Dont use This Exmample
// for (let i=0; i<valu.length;i++){
//     valu[i]=AddOne(valu[i])
    
// }

// console.log(valu)

//* We Use (to look like delegate)



let valu;

function MultiplayByTwo(a,b,c,callBack){
    
    let arr=[]
    for (let i=0; i<3;i++){
        arr[i]=callBack(arguments[i]*2)
    }
    return arr;
}


function AddOne(a){
    return a+1;
}

valu=MultiplayByTwo(5,9,6,AddOne)

console.log(valu)
