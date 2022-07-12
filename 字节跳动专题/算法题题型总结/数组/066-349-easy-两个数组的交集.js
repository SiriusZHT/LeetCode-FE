// 面试官会先问：两个数组求交集，怎么求？
// 以及说一下时间复杂度（不允许使用编程语言自带的交集功能）。
// 答完之后再问：如果两个数组都是非递减的，又应该怎么求？时间复杂度多少？（本人亲身经历）

// 时间复杂度O(mlogm+nlogn)，两数组快排时间复杂度分别是O(mlogm)、O(nlogn)，双指针遍历需要O(m+n)，复杂度取决于较大的O(mlogm+nlogn)。
// 空间复杂度O(logm+logn)排序使用的额外空间
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let pointer1 = 0
    let pointer2 = 0
    const set = new Set()
    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        if (nums1[pointer1] === nums2[pointer2]) {
            set.add(nums1[pointer1])
            pointer1++
            pointer2++
        } else if (nums1[pointer1] < nums2[pointer2]) {
            pointer1++
        } else {
            pointer2++
        }
    }
    return [...set]
};

// nums1 = [4,5,9]
// nums2 = [4,4,8,9,9]
// intersection = [4,9]
var intersection = function (nums1, nums2) {
    nums1.sort((x, y) => x - y);//排序
    nums2.sort((x, y) => x - y);
    const length1 = nums1.length,
        length2 = nums2.length;
    let index1 = 0,//双指针
        index2 = 0;
    const intersection = [];
    while (index1 < length1 && index2 < length2) {//双指针遍历数组
        const num1 = nums1[index1],
            num2 = nums2[index2];
        if (num1 === num2) {//如果两个指针指向的元素相等 就时其中一个交集
            //防止重复加入
            if (num1 !== intersection[intersection.length - 1]) {
                intersection.push(num1);
            }
            index1++;
            index2++;
        } else if (num1 < num2) {
            index1++;//num1 < num2说明mums1需要向右移动
        } else {
            index2++;//num1 > num2说明mums1需要向左移动
        }
    }
    return intersection;
};

// m + n
var intersection = function(nums1, nums2) {
    let a = new Set(nums1)
    let b = new Set(nums2)
    let intersect = new Set([...a].filter(x => b.has(x))); 
    return intersect = [...intersect]
};

var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);//数组转成set
    if (set1.size > set2.size) {//用size小的数组遍历
        [set1, set2] = [set2, set1]
    }
    const intersection = new Set();
    for (const num of set1) {//遍历set1
        if (set2.has(num)) {//元素如果不存在于set2中就加入intersection
            intersection.add(num);
        }
    }
    return [...intersection];//转成数组
};