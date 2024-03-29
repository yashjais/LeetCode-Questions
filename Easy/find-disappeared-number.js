// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.



// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]


// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n


// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const numsLength = nums.length;
    let i = 0;
    while (i < numsLength) {
        if (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
            const temp = nums[i];
            const anotherTemp = nums[i] - 1;
            nums[i] = nums[nums[i] - 1];
            nums[anotherTemp] = temp;
        } else {
            i += 1;
        }
    }

    const returnNum = [];
    for (let i = 0; i < numsLength; i += 1) {
        if (nums[i] !== i + 1) {
            returnNum.push(i + 1);
        }
    }
    return returnNum;
};

console.log(findDisappearedNumbers([3,2,2,1]))