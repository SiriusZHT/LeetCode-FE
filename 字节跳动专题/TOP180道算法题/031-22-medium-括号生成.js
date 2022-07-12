/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    function bt(temp, l, r) {
        if(l === 0 && r === 0) {
            res.push(temp);
        }
        if(l > 0) {
            bt(temp + '(', l - 1, r);
        }
        if(l < r) {
            bt(temp + ')', l, r - 1);
        }
    }
    bt('', n, n);
    return res;
};