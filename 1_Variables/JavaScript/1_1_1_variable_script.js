
// Sadece declere edildikde value verilmedikde --- type >> undefinde
    let varabile
    console.log(varabile);

// verilen value gore type teyin edilir
    let age=25
    console.log(age)


// evvelki setirde verilen her hasni bir deyiskenin value-si yeni setirde yeniden teyin edildikde yeni setrideki melumati goturecek

    let fname='madWill'
    console.log(fname)


// reqemle variable baslaya bilmez
    //let 1a
    let number1=35
    console.log(number1)

// javascriptde teyin edilmis keyword ve keylerden deyisken teyin edilmir

// $,_ baslayaraq yazila biler

    let $test1="salam"
    let _test="necese"
    console.log('test1 >> ',$test1)
    console.log('_test >> ',_test)

// bosluq qoyularaq variable teyin edilmir

    // let names surename -> xxxxxxxxxxxxxxxx
    let names_surename="Dr.MadWill"
    let namesSurename="Domation Road"
    console.log('names_surename >> ',names_surename)
    console.log('namesSurename >> ',namesSurename)

// case sensetive (boyuk kicik heriflere hesssasd;r)

    let fullage='15/25/2021'
    let FullAge='30/01/2025'
    console.log('fullage >> ',fullage)
    console.log('FullAge >> ',FullAge)   


// variable var,let ve const ile declere edilir
    var var_variable="Dr var"
    let let_variable="Dr let"
    const const_variable="Dr const"
    console.log('var_variable >> ',var_variable)
    console.log('let_variable >> ',let_variable)
    console.log('const_variable >> ',const_variable)
    

// funcition scop and Block scop
    
    if (2<5){
        let let_test=5
        var var_test=25

    }
    // Block Scop
        // console.log(let_test) //->> error 

    // Funcition Scop
        console.log('var_test >> ',var_test)


