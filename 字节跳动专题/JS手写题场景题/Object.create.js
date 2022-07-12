function create(obj) {
    function f() {};
    // new 的对象 的 __proto__ 会指向 obj
    // 那么这个对象获取属性的时候，会在 obj 里面找，相当于进行 create 了
    f.prototype = obj;
    return f;
}