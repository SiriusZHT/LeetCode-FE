// 剑指 Offer 30. 包含min函数的栈Copy for Markdown
// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。



// 示例:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min(); --> 返回 - 3.
// minStack.pop();
// minStack.top(); --> 返回 0.
// minStack.min(); --> 返回 - 2.


// 提示：

// 各函数的调用总次数不超过 20000 次


// 注意：本题与主站 155 题相同：https://leetcode-cn.com/problems/min-stack/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (!this.stack1.length && !this.stack2.length) {
        this.stack1.push(val);
        this.stack2.push(val);
        return;
    }
    this.stack1.push(val);
    if (this.stack2[this.stack2.length - 1] > val) {
        this.stack2.push(val);
    } else {
        this.stack2.push(this.stack2[this.stack2.length - 1]);
    }
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack1.pop();
    this.stack2.pop();
    return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack2[this.stack2.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */