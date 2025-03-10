function fun(c,d){
    let m = 10;
    function gun(){
        let x = 99;
        console.log("Addition of m and c is ",m + c );
    }
    return gun;
}

const g = fun(3,4);
g();
//This is actually Closures 
// closure is a mechanism using which a function remembers the variable present in the outer function scope , even when the outer fucntion execution is completed . 
