// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

// Constraints:

// 2 <= arr.length <= 105
// -106 <= arr[i] <= 106

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
// counting sort - not working

// var minimumAbsDifference = function(arr) {
//     const arrLength = arr.length;
//     const counts = new Array(arrLength + 1).fill(0);

//     for (let i = 0; i < arrLength; i += 1) {
//         counts[arr[i]] += 1;
//     }
//     counts.unshift(0);
//     counts.pop();

//     for (let i = 1; i < arrLength + 1; i += 1) {
//         counts[i] = counts[i] + counts[i - 1];
//     }
//     console.log('counts', counts);

//     const sortedArr = [...arr];
//     for (let i = 0; i < arrLength; i += 1) {
//         const num = arr[i];
//         const index = counts[num];
//         sortedArr[index] = num;
//         counts[num] += 1;
//     }

//     console.log('sortedAr', sortedArr)
//     // return sortedArr;
// };

var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);

  const arrLength = arr.length;

  let minimumDiff = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arrLength; i += 1) {
    if (arr[i + 1] - arr[i] < minimumDiff) {
      minimumDiff = arr[i + 1] - arr[i];
    }
  }

  const pairs = [];
  for (let i = 0; i < arrLength; i += 1) {
    if (arr[i + 1] - arr[i] === minimumDiff) {
      pairs.push([arr[i], arr[i + 1]]);
    }
  }
  return pairs;
};

console.log(minimumAbsDifference([4, 2, 1, 3]));
