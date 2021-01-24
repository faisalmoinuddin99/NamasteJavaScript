/*
Introduction to Hoisting in JS
-------------------------------

Hositing is a phenomenon in Javascript by which you can access variables and functions, even before you have initialized it or you have put some value in it. 
*/

getName() // Hello
console.log(x); // undefined
console.log(getName);

var x = 7
function getName(){
    console.log("Hello");
}
