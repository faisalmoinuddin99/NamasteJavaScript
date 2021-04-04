console.log(a); // ReferenceError: Cannot access 'a' before initialization --> In Temporal Dead Zone

let a = 100
var b = 200

let greeting = () => {
    console.log("hello");
}
/*
Scope:

Script
a: undefined


Global               Window

b: undefined


Note: 
# Temporal Dead Zone is a time since when this let variable was hoisted and till its initialied some value

# The time between hoisitng and till its initialized some valuee its called Temporal Dead Zone

# So the phase from Hoisitng tilll it assign or get some value that phase is known as Tempooral Deead Zone
*/