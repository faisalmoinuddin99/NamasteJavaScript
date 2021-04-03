/*
Scope and Lexical Environment
*/
function a(){

    var b = 10 // locally available for function a()
    c()

    function c(){
       
    }


  
}

a()
console.log(b); // b not defiend

