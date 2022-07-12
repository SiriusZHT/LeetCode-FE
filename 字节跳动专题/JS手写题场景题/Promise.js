const RESOLVED = 'resolved';
const REJECTED = 'rejected';
const PENDING = 'pending';

function myPromise() {
    var self = this;
    this.state = PENDING;
    this.value = null;
    this.resolvedCallbacks = [];    
    this.rejectedCallbacks = [];    
    
    function resolve(value) {
        if(value instanceof myPromise) {
            return value.then(resolve, reject);
        }

        setTimeout(() => {
            if(self.state === PENDING) {
                self.state = RESOLVED;
                self.value = value;
                self.resolvedCallbacks.forEach(callback => {
                    callback(value);
                })
            }
        }, 0);
    }

    function reject(value) {
        setTimeout(() => {
            if(self.state === PENDING) {
                self.state = REJECTED;
                self.value = value;
                self.rejectedCallbacks.forEach(callback => {
                    callback(value);
                })
            }
        }, 0)
    }

    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
    const self = this;
    return new myPromise((resolve, reject) => {
        let resolved = () => {
            try {
                const res = onFulfilled(self.value);
                return res instanceof myPromise ? res.then(resolve, reject) : resolve(res);
            } catch (e) {
                reject(e);
            }
        }

        let rejected = () => {
            try {
                const res = onRejected(self.value);
                return res instanceof myPromise ? res.then(resolve, reject) : reject(res);
            } catch (e) {
                reject(e);
            }
        }

        switch(self.status) {
            case PENDING:
                self.resolvedCallbacks.push(resolved);
                self.rejectedCallbacks.push(rejected);
                break;
            case RESOLVED: 
                resolved();
                break;
            case REJECTED: 
                rejected();
                break;
        }
    });
}

