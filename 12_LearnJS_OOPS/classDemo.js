class Product{
    //Data Member should not be defined using let var , if done than it will give error 
    //Data Members 
    name;price;category;description;rating;
    constructor(name,category,description,rating){
        console.log("Constructor Calles !! ");
        return null;
    }
    //Member functions
    addToCart(){
        console.log("Product Added to Cart ");
    }
    removeFromCart(){
        console.log("Product Removed from Cart");
    }
    displayProduct(){
        console.log("Product displayed",this);
    }
    buyProduct(){
        console.log("Product Purchased !!");
    }

}