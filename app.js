console.log(x); // undefined 
//console.log(a); // ReferenceError: Cannot access 'a' before initialization

var x = 10 // created inside global
let a  = 20 // created inside Script

console.log(a);

/*
NOTE: # let and const allocate memory bt not in Global space

# They allocate memory in spreate memory location called script

# But in case of var the memory allocation happends in Global Space

# Thats the reason you were facing ReferenceError: Cannot access 'a' before initialization

# You have to perform declaration in let and const variables before accessing it
*/