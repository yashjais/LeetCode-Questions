/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     const numsLength = nums.length;

//     let i = 0
//     let j = 0;
//     while (i < numsLength) {
//         if (nums[i] !== 0) {
//             nums[j] = nums[i];
//             j++;
//         }
//         i++;
//     }

//     if (j < numsLength) {
//         while (j < numsLength) {
//             nums[j] = 0;
//             j++;
//         }
//     }

//     return nums;
// };

// another solution
var moveZeroes = function(nums) {
    let count = 0; 
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[count];
            nums[count] = temp;
            count++;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));