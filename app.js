// function statement
a()
//console.log(b); // error
function a(){
    console.log("a is called");
}


// function expression

let b = function(){
    console.log("b is called");
}


// function declaration -- is nothing but function statement

// Anonymous function
/* 
function () {
Uncaught SyntaxError: Function statements require a function name
}
*/

var c = function() // --> Anonymous function
{

}

// Named function expression

let name = function addName(param){
    console.log(`my name is ${param}`);
}

name('faisal')
// addName() --> Uncaught ReferenceError: addName is not defined

let v = function x(){
    console.log(x); 
}

v()

// first class function

