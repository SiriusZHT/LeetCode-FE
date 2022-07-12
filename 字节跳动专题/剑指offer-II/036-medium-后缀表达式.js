// 剑指 Offer II 036. 后缀表达式Copy for Markdown
// 根据 逆波兰表示法，求该后缀表达式的计算结果。

// 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

 

// 说明：

// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 

// 示例 1：

// 输入：tokens = ["2","1","+","3","*"]
// 输出：9
// 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
// 示例 2：

// 输入：tokens = ["4","13","5","/","+"]
// 输出：6
// 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
// 示例 3：

// 输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// 输出：22
// 解释：
// 该算式转化为常见的中缀算术表达式为：
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// 主要的解题思路是栈中只保存操作数，操作符不需要保存在栈中
// 如果遇到的是一个操作数，则将其入栈；如果遇到的是一个操作符，则两个操作数出栈并执行相应的运算，然后计算结果入栈
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const calculate = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        // js 这里要用parseInt
        return parseInt(num1 / num2, 10);
      default:
        return 0;
    }
  };
  let stack = new Array();
  for (let a of tokens) {
    switch (a) {
      case "+":
      case "-":
      case "*":
      case "/":
        let num1 = stack.pop();
        let num2 = stack.pop();
        // 注意下面调用calculate函数时第一个参数是num2而非num1
        stack.push(calculate(num2, num1, a));
        break;
      default:
        stack.push(parseInt(a, 10));
    }
  }
  return stack.pop();
};