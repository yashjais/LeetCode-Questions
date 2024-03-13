/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let consecutiveOne = 0;
    let largestConsecutiveOne = 0;
    const numsLength = nums.length;

    for (let i = 0; i < numsLength; i += 1) {
        if (nums[i] === 1) {
            consecutiveOne += 1;
        } else {
            if (consecutiveOne > largestConsecutiveOne) {
                largestConsecutiveOne = consecutiveOne;
            }
            consecutiveOne = 0;
        }

        if (consecutiveOne > largestConsecutiveOne) {
            largestConsecutiveOne = consecutiveOne;
        }
    }
    return largestConsecutiveOne;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))