

// Number 
    let numbers;

    //convert to number 
    numbers=Number("25");

    //convert to number
    numbers=parseInt("36.26");

    //ondaliq eded convert
    numbers=parseFloat("36.26")

    // bool deyer qaytaran cevrilecek  deyerin nan olub olmadiqini yoxlayir
    numbers=isNaN("10");
    
    //input: number value , output: string | basdan sona value mueyyen araliqda eded secmeye imkan verir
    numbers=(100.255).toPrecision(5);

    // input: number value , output: string | vergulden sonra muyyen sayda eded
    numbers=(100.2555558).toFixed(3)

    // Pi eded
    numbers=Math.PI;

    // yuvarlaqlasdirma en yaxin eded
    numbers=Math.round(23.35)

    // yuvarlaqlasdirma yuxari yuvarlama
    numbers=Math.ceil(23.35)

    // yuvarlaqlasdirma asaqi yuvarlama
    numbers=Math.floor(23.95)

    // ustu eded
    numbers=Math.pow(2,5)

    // kok alma
    numbers=Math.sqrt(25)

    // modulunu alama
    numbers=Math.abs(-25);

    //input: array output:number value min eded
    numbers=Math.min(1,5,5,6);

    //input: array output:number value max eded
    numbers=Math.max(2,5,6,7);

    // random eded
    numbers=Math.random();




console.log(numbers);
console.log(typeof numbers);



