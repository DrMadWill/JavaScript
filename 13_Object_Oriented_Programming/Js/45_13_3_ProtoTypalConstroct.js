//Prototypal Inheritance


//* Parent Person Object
let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateeAge = function() {
    return new Date().getFullYear() - this.yearOfBirth;
}


//* Child Person Object
let Teacher = function(name,yearOfBirth,job,subject)
{
    Person.call(this,name,yearOfBirth,job)
    this.subject=subject;
}

// Inheritance the Person person prototype methods
Teacher.prototype = Object.create(Person.prototype)

// Set Teacher Constructor
Teacher.prototype.constructor=Teacher
console.log(Teacher.prototype.constructor)

let orxan = new Teacher("Orxan",1999,"Teacher","Az Dili ve Ədəbiyyat");

Teacher.prototype.consl=function(){
    console.log(`${this.name} is ${this.job}. He is ${this.calculateeAge()} old and He is ${this.job} of ${this.subject}`)
}
console.log(orxan);
console.log(orxan.calculateeAge());
orxan.consl()
