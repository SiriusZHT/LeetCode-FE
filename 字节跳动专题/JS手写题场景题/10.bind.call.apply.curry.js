function myBind(obj) {
    if(typeof this !== 'function') {
        throw new Error('type error');
    }
    let fn = this;
    let args = [...arguments].slice(1);
    return function subFn() {
        // 构造函数
        this = this instanceof subFn ? this : obj;
        fn.apply(this, [...args, ...arguments]);
    }
}

function myCall(obj) {
    if(typeof this !== 'function') {
        throw new Error('type error');
    }
    let args = arguments.slice(1);
    obj = obj || window;
    obj.fn = this;
    let res = obj.fn(...args);
    delete obj.fn;
    return res;
}

function myApply(obj) {
    if(typeof this !== 'function') {
        throw new Error('type error');
    }
    let args = arguments[1];
    obj = obj || window;
    obj.fn = this;
    let res = args ? obj.fn(...args) : obj.fn();
    delete obj.fn;
    return res;
}

// ES5
function curry(fn, args) {
    let len = fn.length;
    args = args || [];
    return function() {
        let preArgs = args.slice(0);
        let subArgs = arguments;
        for(let i = 0; i < subArgs.length; i++) {
            preArgs.push(subArgs[i]);
        }
        if(preArgs.length >= len) {
            return fn.apply(this, preArgs);
        } else {
            return curry.call(this, fn, preArgs);
        }
    }
}

// ES6
function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}