// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.



// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const numsLength = nums.length;

    let maxNum = Number.NEGATIVE_INFINITY;
    let secMaxNum = Number.NEGATIVE_INFINITY;
    let thirdMaxNum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < numsLength; i += 1) {
        if (nums[i] >= maxNum) {
            if (nums[i] === maxNum) {
                continue;
            }
            if (secMaxNum) {
                thirdMaxNum = secMaxNum;
            }
            if (maxNum) {
                secMaxNum = maxNum;
            }
            maxNum = nums[i];
        } else if (nums[i] >= secMaxNum && secMaxNum < maxNum) {
            if (nums[i] === secMaxNum) {
                continue;
            }
            if (secMaxNum) {
                thirdMaxNum = secMaxNum;
            }
            secMaxNum = nums[i];
        } else if (nums[i] >= thirdMaxNum && thirdMaxNum < secMaxNum) {
            if (nums[i] === thirdMaxNum) {
                continue;
            }
            thirdMaxNum = nums[i];
        }
    }

    if (thirdMaxNum !== Number.NEGATIVE_INFINITY) return thirdMaxNum;
    return maxNum;
};

console.log(thirdMax([3,2,1]))