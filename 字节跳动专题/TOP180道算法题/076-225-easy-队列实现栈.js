let MyStack = function() {
    this.queue = [];
    this._queue = [];
};

MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

MyStack.prototype.pop = function() {
    while(this.queue.length > 1){
        this._queue.push(this.queue.shift());
    }
    let ans = this.queue.shift();
    while(this._queue.length){
        this.queue.push(this._queue.shift());
    }
    return ans;
};

MyStack.prototype.top = function() {
    return this.queue.slice(-1)[0];
};

MyStack.prototype.empty = function() {
    return !this.queue.length;
};
