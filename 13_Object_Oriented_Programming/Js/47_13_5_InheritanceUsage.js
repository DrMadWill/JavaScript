//* Inheritance Usage



//* Person Create
function Person(name){
    this.name=name;
}

Person.prototype.Introduce=function(){
    console.log("I am "+ this.name)
}



//*Student
function Student(name,number){
    Person.call(this,name)
    this.number=number
}

Student.prototype=Object.create(Person.prototype)
Student.prototype.constructor=Student

Student.prototype.Study=function(){
    console.log(this.name + " is study number: " + this.number)
}

// Instance
let eli =new Student("Eli",15)
eli.Study()


//* Teacher Create
function Teacher(name,branch){
    Person.call(this,name)
    this.branch=branch;
}

// Inheritance Proto
Teacher.prototype=Object.create(Person.prototype)

// Constucor 
Teacher.prototype.constructor=Teacher
Teacher.prototype.Teach=function(){
    console.log(this.name + " Teach " + this.branch)
}

// Instanace
let orxan = new Teacher("Orxan","Azdili")
orxan.Teach()
// orxan.Introduce()





//* HeadMaster Create
function HeadMaster(name,branch){
    Teacher.call(this,name,branch)
}

// Inheritance Proto
HeadMaster.prototype=Object.create(Teacher.prototype)

// Constucor 
HeadMaster.prototype.constructor=HeadMaster

HeadMaster.prototype.ShareTask=function(){
    console.log(this.name + " share task ")
}

// Instance
let bela = new HeadMaster("Bela","Tarix")
bela.ShareTask()//Headmaster
bela.Teach()//Teacher
bela.Introduce()//Person
console.log(bela)