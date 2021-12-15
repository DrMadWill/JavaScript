// Sub Classes

// *ES5
function PersonES5(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

PersonES5.prototype.SayHi = function(){
    return `Hello I'm ${this.firstName}`
}

function CustomerES5(firstName,lastname,phone,username){
    PersonES5.call(this,firstName,lastname)
    this.phone = phone;
    this.username = username;
}

CustomerES5.prototype=Object.create(PersonES5.prototype)

let customer =new CustomerES5("Dan","Fancelo",05000,"FanDan")
console.log(customer.SayHi())

//*ES6

class PersonES6{
    constructor(firstName,lastname){
        this.firstName = firstName;
        this.lastName = lastname;
    }

    SayHi(){
        return `Hello I'm ${this.firstName}`
    }
}

class CustomerES6 extends PersonES6{
    constructor(firstName,lastname,phone,username){
        super(firstName,lastname)
        this.phone = phone;
        this.username = username;
    }
}

let customerES6 = new CustomerES6("Hiden","Kadiril",05500,"Kadri")
console.log(customerES6)
console.log(customerES6.SayHi())
