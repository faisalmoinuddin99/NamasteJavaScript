/*
Shadowing is not only the concept oof block, it behaves thhe same way even in the function also 
*/

const c = 100 // created in script memory location

function x(){
    const c = 30 // created in local memory of x
    console.log(c); // 30
}

console.log(c); // 100
x()