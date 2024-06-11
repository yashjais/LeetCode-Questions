// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// brute force solution
var topKFrequent = function (nums, k) {
  const numLen = nums.length;

  let numsObj = {};
  for (let i = 0; i < numLen; i += 1) {
    if (numsObj[nums[i]]) {
      numsObj[nums[i]] += 1;
    } else {
      numsObj[nums[i]] = 1;
    }
  }

  // sort the object based on the value of key
  const entries = Object.entries(numsObj);
  const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

  const returnArr = [];
  let i = 0;
  while (i < k) {
    returnArr.push(sortedEntries[i][0]);
    i += 1;
  }

  return returnArr;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
