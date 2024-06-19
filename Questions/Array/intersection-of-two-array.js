// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.


// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const countsArr1 = new Array(1001).fill(0);
    const countsArr2 = new Array(1001).fill(0);
    const nums1Len = nums1.length;
    const nums2Len = nums2.length;

    for (let i = 0; i < nums1Len; i += 1) {
        countsArr1[nums1[i]]++;
    }

    for (let i = 0; i < nums2Len; i += 1) {
        countsArr2[nums2[i]]++;
    }

    const resultArr = [];
    for (let i = 0; i < 1001; i += 1) {
        if (countsArr1[i] && countsArr2[i]) {
            resultArr.push(i);
        }
    }

    return resultArr;
};

console.log([1,2,2,1], [2,2]);
