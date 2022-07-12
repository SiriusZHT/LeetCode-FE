// 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let ans = 0;
    for(let i = 0; i < columnTitle.length; i++) {
        ans = ans * 26 + (columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1); 
    }
    return ans;
};