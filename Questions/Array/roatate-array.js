// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.



// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105


// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     const numsLen = nums.length;
//     if (numsLen < 2 || k === 0 || k === numsLen) return nums;

//     let newK = k;
//     if (k > numsLen) {
//         newK = k % numsLen;
//     }

//     const rotation = numsLen - newK;

//     if (rotation === 0) return nums;

//     const slicedArr = nums.splice(0, rotation);
//     nums.push(...slicedArr);

//     return nums;
// };

// more optimized solution
var rotate = function(nums, k) {
    let length = nums.length;

    if( length <= 2)  {
        for(let i = 0; i < k; i += 1) {
            nums.unshift(nums[length-1]);
            nums.pop();
        }
    } else {
        let arr = nums.splice(length - k);
        nums.unshift(...arr);
    }
};

console.log(roatate([1,2,3,4,5,6,7], 3))
console.log(roatate([1,2,3,4,5,6,7], 16))
