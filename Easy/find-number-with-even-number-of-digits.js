/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i += 1) {
    const numLength = nums[i].toString().length;
    if (numLength % 2 === 0) {
      count += 1;
    }
  }

  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
