/*
1. Javascript is a Synchronous Single-Threaded Language.
2. Single-Threaded means JavaScript Excute one line or one command at a time.
3. And when we say Synchronous Single-Threaded that means executing one command at a time and in a specific order.
*/

var n = 2 

function square(num) {
    var ans = num * num
    return ans
}

var squrareOfTwo = square(n)
var squrareOfFour = square(4)