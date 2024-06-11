// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//     const aLen = a.length;
//     const bLen = b.length;
//     const len = Math.max(aLen, bLen);
//     if (aLen > bLen) {
//         let zerosToAdd = aLen - bLen;
//         let i = 0;
//         while (i < zerosToAdd) {
//             b = '0' + b;
//             i += 1;
//         }
//     } else if (bLen > aLen) {
//         let zerosToAdd = bLen - aLen;
//         let i = 0;
//         while (i < zerosToAdd) {
//             a = '0' + a;
//             i += 1;
//         }
//     }

//     let result = '';
//     let carryOver = 0;
//     for (let i = len - 1; i >= 0; i -= 1) {
//         let firstNum = Number(a[i]) || 0;
//         let secondNum = Number(b[i]) || 0;
//         if (carryOver + firstNum + secondNum === 0) {
//             result = '0' + result;
//             carryOver = 0;
//         } else if (carryOver + firstNum + secondNum === 1) {
//             result = '1' + result;
//             carryOver = 0;
//         } else if (carryOver + firstNum + secondNum === 2) {
//             result = '0' + result;
//             carryOver = 1;
//         } else if (carryOver + firstNum + secondNum === 3) {
//             result = '1' + result;
//             carryOver = 1;
//         }
//     }

//     if (carryOver) result = '1' + result;

//     return result;
// };

// more readable
var addBinary = function (a, b) {
    const aLen = a.length;
    const bLen = b.length;
    let carry = 0;
    let res = "";

    for (i = aLen - 1, j = bLen - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
        res = (sum % 2) + res;
        carry = sum > 1 ? 1 : 0;
    }

    if (carry == 1) res = "1" + res;

    return res;
};

console.log(addBinary(a = "11", b = "1"))