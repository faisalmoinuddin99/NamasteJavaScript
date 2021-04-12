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

// first class function

