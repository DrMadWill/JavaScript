// * Class
function PersonES5(name,job,age){
    this.name = name;
    this.job = job;
    this.age = age;
}

PersonES5.prototype.calculateBrithOfYear = function(){
    console.log(this.age)
    return new Date().getFullYear() - this.age;
}

let orxan = new PersonES5("Orxan","Teeacher",21);
console.log(orxan.calculateBrithOfYear())
console.log(orxan)

class PersonES6{
    constructor(name,job,age){
        this.name = name;
        this.job = job;
        this.age = age;
    }

    calculateBrithOfYear = function(){
        return new Date().getFullYear() - this.age
    }

}


let astird = new PersonES6("Astrid","Flyer",23)
console.log(astird.calculateBrithOfYear())
console.log(astird)