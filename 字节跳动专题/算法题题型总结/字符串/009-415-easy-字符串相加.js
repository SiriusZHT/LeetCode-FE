// 【字节009】415. 字符串相加
// 示例 1：
// 输入：num1 = "11", num2 = "123"
// 输出："134"
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let carry = 0;
    const res = [];
    // 从后往前遍历
    while(p1 >= 0 || p2 >= 0) {
        let cur1 = num1[p1] ? +num1[p1] : 0; // 或者 num1[p1] - 0 也可以转成 number
        let cur2 = num2[p2] ? +num2[p2] : 0;
        let cur = carry + cur1 + cur2;
        carry = Math.floor(cur / 10);
        res.push(Math.floor(cur % 10));
        p1--, p2--;
    }
    if(carry) {
        res.push(carry);
    }
    return res.reverse().join("");
};