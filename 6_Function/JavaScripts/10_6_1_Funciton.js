

// Function Declaration & Expression

    function sum(a,b){  //declaration
        return a+b
    }


    // console.log(sum(5,6))


    let count=function(a,b){ //Expration
        return a+b
    }

    // console.log(count(5.5,6))


    // args
    
    function total(){
        var element=0;
        for (let index = 0; index < arguments.length; index++) {
            element += arguments[index];
            
        }

        return element

    }


    console.log("--->>",total(25,35,45,36))
