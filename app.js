/*
Scope and Lexical Environment
*/
function a(){

    c() 
    var b = 10 //  phase I : undefiend --> Inside Local Scope of function a()
   
    function c() {
        console.log(" I am inside C : " + b ); // I am inside C : undefined
    }
    
}
var b = 100 // Global Scope
a()

//console.log(b); //  b is not defined
