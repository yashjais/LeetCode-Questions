/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i += 1) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i += 1;
    }
  }
  console.log('arr', arr);
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
