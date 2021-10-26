
const fristname="DomationRoad"
const lastname="MadWill"
const age=23;
const multiline=`hi my name
is Will
`
let results;
// String

    // Conection
    results=fristname+" "+lastname;
    
    // Concat
    results=fristname.concat("--",lastname);

    // Lenght output:numer
    results=fristname.length

    //UpperCase
    results=fristname.toUpperCase();

    // LowerCase
    results=fristname.toLowerCase();

    // string daxildeki metinden axtarilan hissenin indexi
    results=fristname.indexOf("io");

    // input:number output:string Substring muyyen araliqdaki hisseni tapma
    results=lastname.substring(3,6);

    // input:number output:string kesme muyyen araliqda eded
    results=lastname.slice(3);

    // replace deyisme
    results=lastname.replace("MadWill","  Mad Will ")

    // trim basdaki sondaki bosluqlari silme
    results=results.trim()

    // input:string , output:object split verilen value gore bolur
    results="salam necesen veziyyet necedi".split(" ")
    
    for (let index = 0; index < results.length; index++) {
        const element = results[index];
        console.log(element)
    }
    
    



console.log(results);
console.log(typeof results)