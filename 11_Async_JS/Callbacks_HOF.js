const arr = [1,2,3,4,5];
//myMap is the HOF 
function myMap(arr,fn){
    let result = []; //Create a new array to store the results 
    for(let i = 0;i < arr.length ;i++ ){
        result.push(fn(arr[i],i));
    }
    return result;
}

//Now here g is the Callback
console.log(myMap(arr,function g(element){
    return element**2;
}))

//Advantage of Callbacks 
//We can decide on the runtime what to send as an implementation of callbacks 
