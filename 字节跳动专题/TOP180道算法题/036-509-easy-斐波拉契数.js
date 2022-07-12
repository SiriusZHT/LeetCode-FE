/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0 || n === 1) return n;
    let a = 0, b = 0, c = 1;
    for(let i = 2; i <= n; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return c;
};
