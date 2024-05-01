// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// var singleNumber = function(nums) {
//     const numsLen = nums.length;

//     if(numsLen === 1){
//         return nums[0]
//     }

//     let number = 0

//     for(let i = 0; i < numsLen; i += 1){
//         number = number ^ nums[i]
//     }

//     return number
// };

var singleNumber = function (nums) {
  const obj = {};
  const numsLen = nums.length;

  for (let i = 0; i < numsLen; i += 1) {
    if (obj[nums[i]]) {
      delete obj[nums[i]];
    } else {
      obj[nums[i]] = 1;
    }
  }

  return Object.keys(obj)[0];
};

console.log(singleNumber[(2, 2, 1, 1, 4)]);
