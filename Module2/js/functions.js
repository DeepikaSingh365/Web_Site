//normal function
function sayHi(){
    console.log("Hello Deepika from function");
}
sayHi();
//parameterised function
function add(a,b){
    console.log("Addition of given numbers is :",a+b);
}
add(2,3 )
//function which returns a value
function mul(a,b){
    return a*b;
}
let product = mul(5,7);
console.log(product);

//function is first class citizen in js

let a = function sub(x,y){
    return x-y;
}
console.log(a(10,7));

//IIFE (Immediately invoked function Expression)
(function(){
    console.log("I am IIFE");
})();

//IIFE with parameter
//declaration ke sath hi call ho jata h
(function(a,b){
 console.log(a/b);
})(10,2);
