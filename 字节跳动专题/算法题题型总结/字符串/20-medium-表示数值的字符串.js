/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    if (!s.length) return false;
    let index = 0;
    // trim
    s = s.trim();

    // 扫描无符号整数 boolean
    function scanUnsignedInteger(s) {
        let temp = index;
        while (index < s.length && s[index] >= '0' && s[index] <= '9') {
            index++;
        }
        return index > temp;
    }

    // 扫描整数
    function scanInteger(s) {
        if (s[index] === "+" || s[index] === "-") {
            index++;
        }
        return scanUnsignedInteger(s, index);
    }
    // 小数点
    let numeric = scanInteger(s);
    if (index < s.length && s[index] === ".") {
        index++;
        numeric = scanUnsignedInteger(s) || numeric;
    }

    // e的情况
    if (index < s.length && (s[index] === "e" || s[index] === "E")) {
        index++;
        numeric = scanInteger(s) && numeric;
    }

    return index === s.length && numeric;
};