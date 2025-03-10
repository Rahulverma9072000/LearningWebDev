//Promises in JS (Official Part of js)
//Promises SOlve the Problem of inversion of control 
//promises are redability enhancers . 
// they are special JS object , which can help us to control future related tasks .

// Generally we prefer using Promises when we have to deal with future tasks . 

//Promises -> how to create a promise , how to consume a promise . 
// In JS , we have a promise constructor . 
// -> new Promise ( new keyword ) , Promise constructor , This constructor expects a callback in the argument . 
// this callback is called executor callback . 
// Why its called executor callback
// because when we create a promise object at that point of time , our constructor will execute this callback . 
// That means this callback is executed by the Promise constructor immediately .  

// How does this callback look like . 
// new Promise((res,rej))'

const pr = new Promise(function exec(res,rej){
    console.log("Executer Callback triggered by Promise Constructor !! ");
    setTimeout(() => {
    const randomNumber = Math.floor(Math.random()*100);
    console.log("Rand Number ",randomNumber);
    if (randomNumber % 2 === 0){
        // random number is even 
        res();
    }else{
        //random number is odd 
        rej();
    }
},5000);
});

console.log("Created the Promise Object ");
console.log(pr);

//How does a promise object look like ? 
// status -> Promise status (At any point of time , a promise object will be in 1 of the 3 states : Pending , Fulfilled, Rejected )
// Pending -> this is the Starting State of the Promise (By Default Pending hogi)
// Our Promise object can only change its state only once ie atmost 1 time we can change the status 
// Either our operation will be successfull (Fulfilled ) , if not (Rejected)
// operation refers to the algorithm written inside the executer callback .  
// If inside the executer callback we called the resolver function , then : Pending -> Fulfiled 
// If inside the executer callback we called the rejecter function , then : Pending -> Rejected 


// value -> Promise value 



