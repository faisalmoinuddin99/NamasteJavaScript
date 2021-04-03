function a(){ // its lexical parent is global
    var b = 10

    c() 
    function c(){ // its lexical parent is a
        console.log(b); // 10

        d()

        function d() { // its lexical parent is c
           // b = 20
            console.log(b); // 20
        }
    }
}

a()