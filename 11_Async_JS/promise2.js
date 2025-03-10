const pr = new Promise((res,rej) => {
    console.log("Executor Callback triggered by Promise Constructor ");
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random()*100);
        console.log("Random Number ",randomNumber);
        if(randomNumber%2 === 0){
            //random Number is even 
            res(randomNumber);
        }else{
            rej(randomNumber);
        }
    });
},5000);

console.log("Created the Promise Object ");
console.log(pr);