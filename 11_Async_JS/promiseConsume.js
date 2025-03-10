//how to consume a Promise ? 
// Promises acts as a placeholder object for something that will come in future . 
//Once the future Execution is done , then we might want to execute some algorithm based on if the future was failure or success . 
// To achieve this on the prmoise object we have a .then function . 
// const pr = new Promise(exec);
// pr.then(onfulfilled,onRejected)  
//onfulfilled : this will go to the onFulfillment Array. 
//onRejected : this willl go to the onRejection Array. 
// pr.then(a,b);
// pr.then(c,d);
// pr.then(e,f);
// then it will make 
// onfullfilment : [a,c,e];
// onRejected : [b,d,f];



