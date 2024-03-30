/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let numsLength = nums.length;

    for (let i = 0; i < numsLength; i += 1) {
        if (nums[i] !== nums[i + 1]) {
            nums[k] = nums[i];
            k += 1;
        }
    }

    return k;
};

console.log(removeDuplicates([1,2,2,3,3,3,4]))