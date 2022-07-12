// 剑指 Offer II 038. 每日温度Copy for Markdown
// 请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 示例 1:

// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
// 示例 2:

// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]
// 示例 3:

// 输入: temperatures = [30,60,90]
// 输出: [1,1,0]
 

// 提示：

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100
 

// 注意：本题与主站 739 题相同： https://leetcode-cn.com/problems/daily-temperatures/

// 方法一：笨办法 O(n^2)
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */const dailyTemperatures = (T) => {
    const res = new Array(T.length).fill(0);
    for (let i = 0; i < T.length; i++) {
        for (let j = i + 1; j < T.length; j++) {
            if (T[j] > T[i]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
}

// 方法二：单调栈
// 单调递增栈：从 栈底 到 栈顶 递增，栈顶大
// 单调递减栈：从 栈底 到 栈顶 递减，栈顶小

// 什么时候用单调栈 
// 通常是一维数组，要寻找任一元素右边（左边）第一个比自己大（小）的元素
// 且要求 O(n) 的时间复杂度

// 模板套路
// 单调递增栈会剔除波峰，留下波谷；单调递减栈会剔除波谷，留下波峰

// 当前项向左找第一个比自己大的位置 —— 从左向右维护一个单调递减栈
// 当前项向左找第一个比自己小的位置 —— 从左向右维护一个单调递增栈
// 当前项向右找第一个比自己大的位置 —— 从右向左维护一个单调递减栈
// 当前项向右找第一个比自己小的位置 —— 从右向左维护一个单调递增栈

const dailyTemperatures = (T) => {
  const res = new Array(T.length).fill(0)
  const stack = []
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i
    }
    stack.push(i)
  }
  return res
}

// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/daily-temperatures/solution/shou-hui-ti-jie-fang-da-guan-cha-dan-diao-zhan-si-/