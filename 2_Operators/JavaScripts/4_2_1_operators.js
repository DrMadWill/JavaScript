let results;
let a=25;
let b=5;
let c=7;
let d=7;


// 1 - Artmetik Opertorlar
    
    results=a+b;
    console.log("a + b = >> ",results)

    results=a-b
    console.log("a - b = >> ",results)

    results=a*b;
    console.log("a * b = >> ",results)

    results=a/b;
    console.log("a / b = >> ",results)

    results=a%b;
    console.log("a % b = >> ",results)

    results=a%b;
    console.log("a % b = >> ",results)

    results=c++;
    console.log("c++ = >> ",results,"// frist value c = 7 ")

    results=++d;
    console.log("++d = >> ",results,"// frist value d = 7 ")

// 2 - Atama Opertorleri

    results+=a // results = results + a;
    console.log("+=a >> ",results)

    results-=a // results = results - a;
    console.log("-=a >> ",results);

    results*=a // results = results * a;
    console.log(" *=a >> ",results)

    results/=a // results = results / a;
    console.log(" /=a >> ",results)

    results%=a // results = results % a;
    console.log(" %=a >> ",results)

    
// 3 - Karsilasdirma Opertorleri

    results=c==d;// variable beraberliyinini
    console.log(" c==d >> ",results)

    results=a===b;// variable beraberliyi , value in tipi
    console.log(" a===b >> ",results)

    results=a!=b;// beraber deyilfir halini yoxlayir
    console.log(" a!=b >> ",results)

    results=a!==b;// tipi ve beraberliyi deyildir hali
    console.log(" a!==b >> ",results)

    results=a>b // >= boyukdur beraberdir halida yoxlana biler  
    console.log(" a>b >> ",results)
    
    results=a<b // >= kicikdir beraberdir halida yoxlana biler  
    console.log(" a<b >> ",results)

// 4 - Mantiksal Opertorleri

    // (&&) and
    results=(a<b) && (c==d)
    console.log(" (a<b) && (c==d) >> ",results)

    // (||) or
    results=(a<b) || (c==d)
    console.log(" (a<b) && (c==d) >> ",results)

    // (!)
    results=!(c==d)
    console.log(" !(c==d) >> ",results)
