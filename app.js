/*
Does Shadow happens with let and const ?
*/

let a = 10 // hoisted in Script memory location
{
    let a = 100 // hoisted in block memory location
    var b = 20 // hoisted in global memory location
    const c = 7 // hoisted in block memory location

    console.log(a); // 100
    console.log(b); // 20
    console.log(c); // 7
}

console.log(a); // 10


/*

And this is what is known as shadowing
*/