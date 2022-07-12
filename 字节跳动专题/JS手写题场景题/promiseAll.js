function promiseAll(promises) {
    return new Promise(function(resolve, reject) {
        if(!Array.isArray(promises)) {
            return reject('type error');
        }
        let len = promises.length;
        let resolvedResult = [];
        for(let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then((res)=> {
                resolvedResult.push(res);
                if(resolvedResult.length === len) {
                    return resolve(resolvedResult);
                } 
                // 不能写 reject 因为有可能还尚未完成所有 promises 的遍历
                // else {
                //     return reject()
                // }
            }, (error) => {
                return reject(error);
            })
        }
    })
}

Promise.all = function(promiseArr) {     
    return new Promise(function(resolve, reject) {         
        const length = promiseArr.length;         
        const result = [];         
        let count = 0;         
        if (length === 0) { 
            return resolve(result);         
        }          
        for (let item of promiseArr) {     
            // 用 Promise.resolve 包 是因为要将 .then 的回调加进去        
            Promise.resolve(item).then(function(data) {                 
                result[count++] = data;                 
                if (count === length) {                     
                    resolve(result);                 
                }             
            }, function(reason) {                 
                reject(reason);             
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

promiseAll([p3, p1, p2]).then(res => {
    console.log(res);
})