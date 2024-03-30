// Selection Sort

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.



// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]


// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.


// Follow up: Could you come up with a one-pass algorithm using only constant extra space?


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// brute force solution
// var sortColors = function(nums) {
//     const numsLength = nums.length;

//     for (let i = 0; i < numsLength; i += 1) {
//         for (let j = i + 1; j < numsLength; j += 1) {
//             let temp;
//             if (nums[i] > nums[j]) {
//                 temp = nums[j];
//                 nums[j] = nums[i];
//                 nums[i] = temp;
//             }
//         }
//     }

//     return nums;
// };

// js sort
//  var sortColors = function(nums) {
//     return nums.sort((a, b) => a - b)
// };

// optimized solution
var sortColors = function(nums) {
    let n = nums.length;
    if(n == 1) return;

    let pointer0 = 0;
    let pointer1 = 0;
    let pointer2 = nums.length-1;

    while(pointer1<=pointer2){
        if(nums[pointer1]==0){
            let temp = nums[pointer0];
            nums[pointer0] = nums[pointer1];
            nums[pointer1] = temp;
            pointer0++;
            pointer1++;
        }else if(nums[pointer1] == 2){
            let temp = nums[pointer2]
            nums[pointer2] = 2;
            nums[pointer1] = temp;
            pointer2--;
        }else{
            pointer1++;
        }
    }

  return nums
};

console.log(sortColors([2,0,2,1,1,0]))