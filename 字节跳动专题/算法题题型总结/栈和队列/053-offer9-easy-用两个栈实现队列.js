var CQueue = function() {
    this.stack1 = []; // 用来 push
    this.stack2 = []; // 用来 pop
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // 用来 pop 的 栈 中还有值，那就直接 pop 栈中的值就行
    if(this.stack2.length !== 0) {
        return this.stack2.pop();
    } 
    // 用来 pop 的 栈 中没有值，那就直接从之前 push 栈中 进行 翻转到 pop 栈中
    // 为什么要翻转？
    // 因为 push 栈中 的 栈顶 是最近一次 push 进去的，而 pop 要保证 栈顶 是最早 push 进去的，所以翻转即可
    else {
        while(this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop() || -1;
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */