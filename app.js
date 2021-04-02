/*
Introduction - Function Invocation and Variable Environment in JS
*/

// How functions work

var  x = 1

a()
b()

console.log(x);

function a() {
    var x = 10
    console.log(x);
}

function b() {
    var x = 100
    console.log(x);
}

/*
Output: 
10
100
1
*/