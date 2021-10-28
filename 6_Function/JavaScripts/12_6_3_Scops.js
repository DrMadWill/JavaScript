

// Global Scop => her yerden accessible olan scop

    // let variables="Hello My World"
    // console.log(variables)

    // function cons(){
    //     console.log("Function scops -->> ",variables)
    // }

    // cons()



// Local Scops => Funksiyalar oz scoplarini yaradir

    var first_names="Domation Road"

    function scops(){
        var last_names="MadWill"
        console.log("Local (Funcition) Scop -> ",first_names);
        console.log("Local (Funcition) Scop -> ",last_names)
    }
    
    scops()
    // console.log("Global Scop",last_names) -> funksiya daxilide decler edilen variable scop xaricinde acssesible deyil

// Blok Scop => butun {} blok scopdur (funksiya -> {})
// Block Scop daxilinden let ve const ile decler edilen butun variablellar block scop xaricinden accessible deyildir


    if (true){
        let last_names="MadWill" 
        var lt_names="Will"
        console.log("Block Scop ->",first_names)
        console.log("Block Scop ->",last_names)
        console.log("Block Scop ->",lt_names)

    }

    console.log("Global Scop",lt_names)


    // console.log("Global Scop",last_names)


