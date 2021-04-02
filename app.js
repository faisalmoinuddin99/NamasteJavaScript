greet() // Good Morning !!!
console.log(getName); // undefined
console.log(printHello); // undefined

var getName = () => {
    console.log("Namaste JavaScript");
}

function greet(){
    console.log("Good Morning !!!");
}


var printHello = function() {
    console.log("Hello world...");
}


getName()
printHello()
