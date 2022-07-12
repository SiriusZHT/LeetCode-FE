function myNew(fn, args) {
    let newObject = null;
    if(typeof fn !== 'function') {
        console.error('type error');
        return;
    }
    // 创建新对象，prototype 指向 fn 的 prototype
    newObject = Object.create(fn.prototype);
    // 用该对象的 this 作用，执行 fn 函数，保存执行后的结果
    let res = fn.apply(newObject, args);
    // 如果执行函数后，返回的是 object，就返回 res 生成的 object；
    // 如果返回的是值，就返回 原来的 object
    return typeof res == 'object' || typeof res === 'function' ? res : newObject;
}
