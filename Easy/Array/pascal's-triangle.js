// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]


// Constraints:

// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let nums = [];

    for (let i = 0; i < numRows; i += 1) {
        const rows = [];
        for (let j = 0; j <= i; j += 1) {
            if (i === j) {
                rows.push(1);
            } else if (j === 0) {
                rows.push(1);
            } else {
                rows.push(nums[i - 1][j - 1] + nums[i - 1][j]);
            }
        }
        nums.push(rows);
    }

    return nums;
};

console.log(generate(5))