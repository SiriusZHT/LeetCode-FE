var MinStack = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack1.push(val);
    this.stack2.length ? this.stack2.push(Math.min(this.stack2[this.stack2.length - 1], val)) : this.stack2.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack1.pop();
    this.stack2.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
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