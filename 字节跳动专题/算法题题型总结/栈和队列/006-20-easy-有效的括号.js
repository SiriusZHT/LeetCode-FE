// 【字节006】20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {')': '(', '}': '{', ']': '['};
    for(let i of s) {
        // 如果当前是左括号，直接push
        if(!map[i]) {
            stack.push(i);
        } 
        // 如果当前是右括号，把左括号栈顶 pop 出来并 和 map 中右括号的左括号比较
        // 不相等说明不符合 相等就继续接下来操作
        else {
            if(stack.pop(i) !== map[i]) return false;
        }
    }
    // 判断左括号栈有无pop干净，干净说明符合
    return !stack.length;
};