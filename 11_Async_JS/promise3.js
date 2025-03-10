// OnFullfilment and OnRejected arrays 
// These Arrays are internally managed by Promise and initially are empty . 
// We can store some function in both of these arrays . How ? Using the .then() / .catch() function available on a Promise Object 
//these function remains in their respective arrays till the time promise is pending . 
// If the promise moves to fulfilled state , all the functions stores in the onFulfillment array is queued in a new queue in the memory called as microTask Queue & onRejected Array does nothing . 
// If the promise goes to Rejected State then all the function in the onRejected array goes to MicroTask Queue.


