function createTimer(time,timerId){
    console.log("Creating a New Timer with id : ",timerId);
    setTimeout(() => {
        console.log(`Timer with id ${timerId} is done `);
    },time);
    console.log("Successfully Created a new timer with id ",timerId);
}
console.log("Starting the code");
createTimer(2000,1);
createTimer(0 , 2);
console.log("Starting a Loop ");
for(let i = 0; i < 1000000000 ; i++){
    //something
}
console.log("Loop is DOne !");
console.log("Last line of code done");

//Predict the output without running the code 

