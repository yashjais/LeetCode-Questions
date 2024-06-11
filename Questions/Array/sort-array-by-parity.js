/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArrayByParity = function(nums) {
//     const numsLength = nums.length;

//     let oddNumberOccurred = false;
//     for (let i = 0; i < numsLength; i += 1) {
//         if (nums[i] % 2 !== 0) {
//             oddNumberOccurred = true;
//         } else if (nums[i] % 2 === 0 && oddNumberOccurred) {
//            // splice it
//             const ele = nums.splice(i, 1);
//             nums.unshift(ele[0])
//         }
//     }

//     return nums;
// };

// more efficient solution
var sortArrayByParity = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    if (nums[left] % 2 === 1 && nums[right] % 2 === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }

    if (nums[left] % 2 === 0) left++;
    if (nums[right] % 2 === 1) right--;
  }

  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
