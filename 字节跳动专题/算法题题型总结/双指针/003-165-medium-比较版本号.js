// 【字节003】165. 比较版本号
// 给你两个版本号 version1 和 version2 ，请你比较它们。
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 通过'.'分段切割字符串 转成数字 比较
var compareVersion = function(version1, version2) {
    // 找到'.'的索引
    const findDigit = (str,start) => {
        let i = start;
        while(i < str.length && str[i] !== '.') {
            i++;
        }
        return i;
    }
    let p1 = 0, p2 = 0, len1 = version1.length, len2 = version2.length;
    while(p1 < len1 && p2 < len2) {
        // 找到'.'
        let digit1 = findDigit(version1, p1);
        let digit2 = findDigit(version2, p2);
        // 进行切割
        let num1 = +version1.substring(p1, digit1);// 转成数字
        let num2 = +version2.substring(p2, digit2);
        // 进行比较
        if(num1 !== num2) return num1 > num2 ? 1 : -1;
        // 指针进位
        p1 = digit1 + 1;
        p2 = digit2 + 1;
    }
    // 如果某一个字符串在另一个字符串已经遍历完后 还有
    while(p1 < len1) {
        let digit1 = findDigit(version1, p1);
        let num1 = +version1.substring(p1, digit1);
        // 比如 0.1 < 0.1.1
        if(num1 > 0) return 1;
        p1 = digit1 + 1;
    }
    while(p2 < len2) {
        let digit2 = findDigit(version2, p2);
        let num2 = +version2.substring(p2, digit2);
        if(num2 > 0) return -1;
        p2 = digit2 + 1;
    }
    return 0;
};