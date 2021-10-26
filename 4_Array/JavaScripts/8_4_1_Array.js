
// Array

    let array= ["Ideal","Creat World","Way","Mad Will",23,5,[25,36]];
    let age=[2021,2012,1998,1995,1925]

    // get array item
    // console.log(array[1])

    // set array item
    // array[4]="why?"

    // Add item last
    // array.push("Good Night")

    // Add item first
    // array.unshift("Big Deal")

    // Last item remove 
    // array.pop();

    // First item remove
    // array.shift();

    // input:value output:number value indexsini cixarir
    // console.log(array.indexOf("Way"))

    // Reserve
    // array.reverse();

    // Sort
    // array.sort();

    // Concat
    // let all = array.concat(age);
    // console.log(all);

    // Splice (start|remove|add)
    array.splice(0,2,"add","end")

    // Find

    function over_18(year_item){
        let age=new Date().getFullYear()-year_item;
        return age>18
    }
        // 18 > Frist value feedback
        let val=age.find(over_18)

    // Filtre
         val=age.filter(over_18)

    console.log(val);








console.log(array)
console.log(array.length)
console.log(typeof array)