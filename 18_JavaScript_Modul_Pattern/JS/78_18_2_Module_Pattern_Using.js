//! Modul Pattern Using


class Product{
    constructor(id,name,salary){
        this.id =  id,
        this.name = name,
        this.salary = salary
    }
}

let products = [
    new Product(1,"Mac",7000),
    new Product(2,"Ipad",5000),
    new Product(3,"Xiaomi",4000)
]

let productController = (function(data){
    // private
    let productCollection = data || []

    let id = productCollection.length;

    function AddProduct(name,salary){
        id++
        let newProduct = new Product(id,name,salary)
        productCollection.push(newProduct)
    }

    function RemoveProduct(product){
        let index = productCollection.indexOf(product)
        if(index >= 0){
            productCollection.splice(index, 1)
        }
    }

    function GetProduct(){
        return productCollection
    }

    return{
        AddProduct,RemoveProduct,GetProduct
    }

})(products)


productController.AddProduct("Iphone 4",3000)
productController.AddProduct("Samsung 6",4000)
productController.AddProduct("Samsung S",5000)
productController.AddProduct("BlacBery 5",5000)



console.log(productController.GetProduct())

 


//? Module Extenting


let extendeds = (function(module){

    module.SayHello = function(){
        console.log("Hello Minna")
    }

    return module

})(productController || {})


extendeds.SayHello()
extendeds.AddProduct("Redemi",1500)
console.log(extendeds.GetProduct())
