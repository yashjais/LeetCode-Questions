// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

/**
 * @param {number[]} heights
 * @return {number}
 */
// var heightChecker = function(heights) {
//     const newArr = [...heights];
//     newArr.sort((a, b) => a - b);

//     let returnNum = 0;
//     for (let i = 0; i < heights.length; i += 1) {
//         if (newArr[i] !== heights[i]) {
//             returnNum += 1;
//         }
//     }

//     return returnNum;
// };

// filter
// var heightChecker = function(heights) {
//     let arr = [...heights];

//     heights.sort((a,b) => a - b);

//     return  heights.filter((x,i)=>x!==arr[i]).length;
// };

// more optimized solution
// 1 <= heights[i] <= 100
// counting sort algo
var heightChecker = function (heights) {
  let counts = Array(heights.length + 1).fill(0);
  let result = 0;
  let currentHeight = 0;

  for (let i = 0; i < heights.length; i++) {
    counts[heights[i]] = (counts[heights[i]] || 0) + 1;
  }

  for (let i = 0; i < heights.length; i++) {
    while (counts[currentHeight] == 0) {
      currentHeight++;
    }

    if (currentHeight != heights[i]) {
      result++;
    }

    counts[currentHeight]--;
  }

  return result;
};


console.log(heightChecker([5,1,2,3,4]));