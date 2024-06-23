// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.



// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false


// Constraints:

// 1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let nSet = new Set();
    let numSquares = new Map();

    for (let i = 0; i < 10; i += 1) {
        numSquares.set(i, Math.pow(i, 2));
    }

    while (n >= 0) {
        if (n === 1) return true;
        if (nSet.has(n)) return false;
        nSet.add(n);

        let nStr = n.toString();
        let num = 0;
        for (let i = 0; i < nStr.length; i += 1) {
            // num += Math.pow(Number(nStr[i]), 2);
            num += numSquares.get(Number(nStr[i]));
        }

        n = num;
    }
};

console.log(isHappy(19));
