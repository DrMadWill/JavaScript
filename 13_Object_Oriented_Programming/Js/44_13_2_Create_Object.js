let personProto ={
    calculateAge : function (){
        return new Date().getFullYear() - this.yearOfBirth 
    }
}

let amid =Object.create(personProto)
amid.yearOfBirth=1980
amid.name="amid"
console.log(amid.name + " year " + amid.calculateAge() + " old." )



