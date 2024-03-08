/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const returnedArr = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (i !== 0) {
      returnedArr.push(returnedArr[i - 1] + nums[i]);
    } else {
      returnedArr.push(nums[i]);
    }
  }

  return returnedArr;
};

console.log(runningSum([1, 2, 3, 4]));
