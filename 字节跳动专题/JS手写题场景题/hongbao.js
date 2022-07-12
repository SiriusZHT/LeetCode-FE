// 总金额 红包数
function redPackage(money, num) {
  let maxAva = Math.floor(money / (num - 3));
  let arr = [];
  for (let i = 0; i < num; i++) {
    let cur = (Math.random() * money).toFixed(2);
    if (cur < 0.01) cur = 0.01;
    if (cur > maxAva) cur = maxAva;
    arr.push(+cur);
    money -= cur;
    if (i === num - 2) {
      arr.push(+money.toFixed(2));
      break;
    }
  }
  return shuffle(arr);
}
// 如果有概率问题 那就洗一下牌吧
function shuffle(arr) {
  let res = [];
  while(arr.length) {
    let index = Math.floor(Math.random() * arr.length);
    res.push(arr[index]);
    arr.splice(index, 1);
  }
  return res;
}

console.log(redPackage(50, 6));
