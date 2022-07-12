// 剑指 Offer 51. 数组中的逆序对
// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

// 示例 1:

// 输入: [7,5,6,4]
// 输出: 5

/**
 * @param {number[]} nums
 * @return {number}
 */
// 归并排序
// 一直切分成两个数组，一直到左右两边只有一个数
// 比较左右两边的数，如果左右两边递归后分别有多个数，那就按照“排序链表的合并”来合并成两个数组
// 在合并的过程中，如果遇到 左边（已排序）某个数 大于 右边（已排序）的某个数
// 说明 左边这个index一直到左边的长度那么多的数，都比右边大，记录并累加到全局count即可
var reversePairs = function(nums) {
    if(nums.length < 2) return 0;
    let count = 0;
    function mergeSort(l, r) {
        if(r === l) return [nums[l]];
        let m = l + ((r - l) >> 1);
        let lArr = mergeSort(l, m);
        let rArr = mergeSort(m + 1, r);
        let pL = 0, pR = 0;
        const temp = new Array(r - l + 1).fill(0);
        let cur = 0;
        while(pL < lArr.length && pR < rArr.length) {
            if(lArr[pL] <= rArr[pR]) {
                temp[cur++] = lArr[pL++];
            } else {
                temp[cur++] = rArr[pR++];
                count += lArr.length - pL;
            }
        }
        while(pL < lArr.length) {
            temp[cur++] = lArr[pL++];
        }
        while(pR < rArr.length) {
            temp[cur++] = rArr[pR++];
        }
        return temp;
    }
    console.log(mergeSort(0, nums.length - 1));
    return count;
};

// 作者：angela-x
// 归并排序：图解链接：https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/li-yong-gui-bing-pai-xu-qiu-ni-xu-dui-by-jy5g/
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  let count = 0;
  // 如果数组中只有1个元素或者为空，则不存在逆序对
  if (nums.length < 2) return count;
  const mergeSort = (front, behind) => {
    // 如果前后指针相遇，则归并区间只剩下一个元素了
    if (front == behind) return [nums[front]];
    let mid = front + ((behind - front) >> 1);
    // 规则让左半部分不包含中必元素 右半部分包含中心元素
    let left = mergeSort(front, mid);
    let right = mergeSort(mid + 1, behind);
    let temp = new Array(behind - front + 1).fill(0);
    // 合并有三个指针
    let cur = 0,
      l = 0,
      r = 0;
    while (l < left.length && r < right.length) {
      // 如果右边元素大于左边元素，将左边元素放到结果数组中
      if (right[r] >= left[l]) temp[cur++] = left[l++];
      else {
        temp[cur++] = right[r++];
        // 如果左边元素大于右边元素，那就出现了序列对了
        // 由于左右两边都是有序的，左边当前元素及之后的元素都会跟右边构建逆序对
        count += left.length - l;
      }
    }
    while (l < left.length) temp[cur++] = left[l++];
    while (r < right.length) temp[cur++] = right[r++];
    return temp;
  };
  // 左闭右闭区间
  mergeSort(0, nums.length - 1);
  return count;
};


// 作者:sirius
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    const res = [...nums];
    function mergeSort(nums, start, end) {
        // 5 7 4 6     2
        // 5   4 6.    1
        // 5   4.      1
        //     4.      1
        if(start >= end) return 0;

        let m = start + Math.floor((end - start) / 2);
        let left = mergeSort(nums, start, m);
        let right = mergeSort(nums, m + 1, end);
        let pLeft = m, pRight = end;
        let count = 0;
        let k = end;
        while(pLeft >= start && pRight >= m + 1) {
            if(nums[pLeft] > nums[pRight]) {
                // res.push(nums[pLeft--]);
                res[k--] = nums[pLeft--];
                count += (pRight - m);
            } else {
                res[k--] = nums[pRight--];
            }
        }
        while(pLeft >= start) {
            res[k--] = nums[pLeft--];
        }
        while(pRight >= m + 1) {
            res[k--] = nums[pRight--];
        }
        for(let i = start; i <= end; i++) {
            nums[i] = res[i];
        }
        return left + right + count;
    }
    return mergeSort(nums, 0, nums.length - 1);
};