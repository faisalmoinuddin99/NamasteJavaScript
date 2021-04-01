
/*
Defination of Hositing: Hoisting is a phenomenon in JS by which you can access variables and functions,
even before you have iniatized it or you have put some value in it.
*/
console.log(x); // undefined
get_Name() // [Function: get_Name]
console.log(get_Name); // Hello
var x  = 7

function get_Name(){
    console.log("Hello");

}

console.log(x); // 7

