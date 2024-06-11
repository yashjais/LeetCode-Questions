// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// brute force solution
// var maximumGap = function(nums) {
//     const numsLen = nums.length;
//     if (numsLen < 2) return 0;

//     nums.sort((a, b) => a - b);
//     let diff = 0;
//     for (let i = 0; i < numsLen; i += 1) {
//         if (nums[i + 1] - nums[i] > diff) {
//             diff = nums[i + 1] - nums[i];
//         }
//     }

//     return diff;
// };

// optimized soultion - time limit exceeded
// var maximumGap = function(nums) {
//     const numsLen = nums.length;
//     if (numsLen < 2) return 0;
//     let maxEle = 0;
//     for (let i = 0; i < numsLen; i += 1) {
//         if (nums[i] > maxEle) {
//             maxEle = nums[i]
//         }
//     }

//     const counts = new Array(maxEle).fill(0);
//     for (let i = 0; i < numsLen; i += 1) {
//         counts[nums[i]] =+ 1;
//     }

//     let diff = 0;
//     const countsLen = counts.length;
//     let i = 0;
//     let lastVal = 0;
//     while(i < countsLen) {
//         if (counts[i]) {
//             if (lastVal && ((i - lastVal) > diff)) {
//                 diff = i - lastVal;
//             }
//             lastVal = i;
//         }
//         i += 1;
//     }

//     return diff;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums === null || nums.length < 2) return 0;
  let len = nums.length;
  let hasNum = new Array(len + 1).fill(false);
  let maxs = new Array(len + 1);
  let mins = new Array(len + 1);
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < len; i++) {
    if (nums[i] > max) max = nums[i];
    if (nums[i] < min) min = nums[i];
  }
  if (min === max) return 0; //数组全等，返回0
  for (let i = 0; i < len; i++) {
    let bid = bucket(nums[i], len, min, max); //求得nums[i]应属的桶号
    maxs[bid] = hasNum[bid] ? Math.max(nums[i], maxs[bid]) : nums[i];
    mins[bid] = hasNum[bid] ? Math.min(nums[i], mins[bid]) : nums[i];
    hasNum[bid] = true;
  }
  let res = 0;
  let i = 1;
  let lastMax = maxs[0]; //第0号桶的最大值
  for (; i <= len; i++) {
    if (hasNum[i]) {
      res = Math.max(res, mins[i] - lastMax); //后面非空桶的最小值减去前面非空桶的最大值
      lastMax = maxs[i];
    }
  }
  return res;
};
function bucket(num, len, min, max) {
  return Math.floor(((num - min) / (max - min)) * len);
}

console.log(maximumGap([[3, 6, 9, 1]]));
