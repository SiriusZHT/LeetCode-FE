// 数组中某一个 Promise 的状态变为 fullfilled 的时候就执行
// 所以给每个 Promise 数组项 的 回调函数 设置成 new Promise .then 接收的 resolve 即可
// 也就是说 把 
// Promise.race([p3, p1, p2]).then(res => {
//     console.log(res);
// })
// 的 .then 传给每一个 promise 数组项，然后每一个进行执行
Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject);
        }
    })
}

Promise.race = function(promiseArr) {     
    return new Promise(function(resolve, reject) {         
        const length = promiseArr.length;         
        if (length === 0) {            
             return resolve();         
        }         
        for (let item of promiseArr) {             
            Promise.resolve(item).then(function(value) {                 
                return resolve(value);             
            }, function(reason) {                 
                return reject(reason);             
            });         
        }
    });
}

// test 
let p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(1);
    }, 1000)
})

let p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(2);
    }, 2000)
})

let p3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(3);
    }, 3000)
})

Promise.race([p3, p1, p2]).then(res => {
    console.log(res);
})