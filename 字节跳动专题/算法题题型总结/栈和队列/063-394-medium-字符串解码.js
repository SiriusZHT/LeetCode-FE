// 1.由内到外，层层解决[ ]，需要保持对字符的记忆，因此用栈
// 2.入栈时机：遇到 [ 意味着要先解决内部的，外部的数字和字母去栈里等

// 当遇到[，已经扫描的数字就是“倍数”，入栈暂存
// 当遇到[，已经扫描的字母也入栈等待，等括号里的解码完了，就能一起参与构建字符串
// 3.出栈时机：遇到 ] 说明内层的扫描完了，栈顶元素（最近遇到的“倍数”和字母）可以出栈了，共同参与子串的构建

/**
 * @param {string} s
 * @return {string}
 */
// 栈
var decodeString = function(s) {
    let numStack = [];        // 存倍数的栈
    let strStack = [];        // 存 待拼接的str 的栈
    let num = 0;              // 临时倍数
    let result = '';          // 临时字符串
    for (const char of s) {   // 逐字符扫描
        if (!isNaN(char)) {   // 遇到数字
            num = num * 10 + Number(char); // 算出倍数
        } else if (char == '[') {  // 遇到 [
            strStack.push(result); // result串入栈
            result = '';           
            numStack.push(num);    // 倍数num进入栈等待
            num = 0;               
        } else if (char == ']') {  // 遇到 ]，两个栈的栈顶出栈
            let repeatTimes = numStack.pop(); // 获取拷贝次数
            result = strStack.pop() + result.repeat(repeatTimes); // 构建子串
        } else {                   
            result += char;        // 遇到字母，追加给result串
        }
    }
    return result;
};
// 或者 用栈 这样写
var decodeString = function(s) {
    let stack1 = []; // 存结果
    let stack2 = []; // 存次数
    let num = 0; // 存当前次数
    let sum = ''; // 存当前结果

    for(let i of s) {
        if(i >= '0' && i <= '9') {
            num = num * 10 + +i;
        } else if(i == '['){
            stack2.push(num);
            num = 0;
            stack1.push(sum);
            sum = '';
        } else if(i == ']') {
            let curNum = stack2.pop();
            sum = stack1.pop() + sum.repeat(curNum);
        } else {
            sum += i;
        }
    }
    return sum;
};

// DFS
var decodeString = function(s) {
    let num = 0
    let sb = ''
    let count = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            count++
            let j = i + 1
            while (count > 0) {
                if (s[j] === '[') count++
                else if (s[j] === ']') count--
                j++
            }
            let temp = decodeString(s.slice(i + 1, j))
            sb = sb + temp.repeat(num)
            num = 0
            count = 0
            i = j - 1
        } else if (s[i] <= 'z' && s[i] >= 'a') {
            sb += s[i]
        } else if (s[i] <= '9' && s[i] >= '0') {
            num = +s[i] + num * 10
        }
    }
    return sb
};