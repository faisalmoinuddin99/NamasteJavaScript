/*
Introduction to Hoisting in JS
*/


var x = 7
function getName(){
    console.log("Hello");
}
getName() // Hello
console.log(x); // 7