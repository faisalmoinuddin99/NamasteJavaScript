var num = 2;

function square(n) {
    var ans = n * n

    function addition(n) {
        var add = n + n

        return add
    }
    
    var a = addition(n)
    return ans + a
}

var square2 = square(num)
var square4 = square(4)

console.log(square2);
console.log(square4);