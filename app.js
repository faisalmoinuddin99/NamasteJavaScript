var a = 10 // global scope
{
    var a = 100 // Global and it ovrride/shawdow the previous value of a
    let b = 2
    const c = 9

    console.log(a); // 100
    console.log(b); // 2
    console.log(c); // 9
}
console.log(a); // 100

/*
It modifies the a to 100
*/