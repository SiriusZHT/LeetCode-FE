function shuffle(arr) {
  let temp = [];
  function getNum() {
    let len = arr.length;
    if(temp.length === arr.length) {
        temp = [];
    }
    let num = random(len);
    if(temp.includes(num)) {
        return getNum();
    } else {
        temp.push(num);
        return arr[num];
    }
  }
  return function(n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(getNum());
    }
    return arr;
  }
}
function random(n) {
  return Math.floor(Math.random() * n);
}

// test case
let arr = shuffle([1,2,3,4,5,6]);
console.log(arr(1));
console.log(arr(2));
console.log(arr(3));
console.log(arr(3));
console.log(arr(1));
console.log(arr(1));
console.log(arr(2));
console.log(arr(2));
console.log(arr(3));
console.log(arr(1));
console.log(arr(2));
console.log(arr(3));
console.log(arr(1));
console.log(arr(1));
console.log(arr(2));
console.log(arr(2));
console.log(arr(3));
