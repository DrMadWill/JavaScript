// Reset Parmetrs


// ES5
function Sum(){
    let arr = Array.prototype.slice.call(arguments)
    let result = 0;
    arr.forEach(function(item){
        result+=item;
    })
    return result;
}

console.log(Sum(5,6,6,16))

// ES+

function Sums(...arr){
    let result = 0;
    arr.forEach((item)=>{
        result+=item
    })
    return result;
}

console.log(Sums(5,6,6,16))

