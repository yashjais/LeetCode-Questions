// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


// Constraints:

// 0 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;

    let start = 1;
    let end = x;
    let mid = null;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);

        // If the square of the middle value is greater than x, move the "end" to the left (mid - 1).
        if (mid * mid > x)
            end = mid - 1;
        else if (mid * mid === x)
            // If the square of the middle value is equal to x, we found the square root.
            return mid;
        else
            // If the square of the middle value is less than x, move the "start" to the right (mid + 1).
            start = mid + 1;
    }

    return Math.round(end);
};

console.log(mySqrt(9));
