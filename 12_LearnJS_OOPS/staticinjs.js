

class Product{
    static x = 10;
    //We can make static variable private too 
    static #y = 20; // Now this is accessible only inside the class 
    constructor(name , price){
        this.name = name;
        this.price = price;
        // console.log("Static Variable is accesed here ? ", x); Reference Error
        console.log(Product.x);
        console.log(Product.#y);
    }
}
let p1 = new Product("iPhone",1000);
console.log(p1);
//Update the static variable 
Product.x = 20;
console.log(Product.x);

