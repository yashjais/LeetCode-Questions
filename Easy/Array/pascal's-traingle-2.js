// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]


// Constraints:

// 0 <= rowIndex <= 33


// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function(rowIndex) {
//     const arr = [];
//     let i = 0;
//     while (i <= rowIndex) {
//         let j = 0;
//         let subArr = [];
//         while (j <= i) {
//             if (i === j) {
//                 subArr.push(1);
//             } else if (j === 0) {
//                 subArr.push(1);
//             } else {
//                 subArr.push(arr[i - 1][j - 1] + arr[i - 1][j])
//             }
//             j += 1;
//         }
//         arr.push(subArr);
//         i += 1;
//     }

//     return arr[rowIndex];
// };

// more optimized solution
var getRow = function(r) {
    const ans = new Array(r+1);
    ans[0] = ans[r] = 1;

    for (i = 1, up = r; i < r; i++, up--) {
        ans[i] = (ans[i-1]*up)/i;
    }

    return ans;
};

console.log(getRow(4))