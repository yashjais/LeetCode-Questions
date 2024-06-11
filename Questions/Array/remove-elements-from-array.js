/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let numsLength = nums.length;

  for (let i = 0; i < numsLength; i += 1) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
      numsLength -= 1;
    }
  }

  console.log(nums);
};

// more effective solution
// var removeElement = function(nums, val) {
//   let k = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   console.log(nums);

//   return k;
// };

console.log(removeElement([3, 2, 2, 3], 2))