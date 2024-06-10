// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.



// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:

// Input: n = 1, bad = 1
// Output: 1


// Constraints:

// 1 <= bad <= n <= 231 - 1

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// O(n)
// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         for (let i = 0; i <= n; i += 1) {
//             if (isBadVersion(i)) return i
//         }
//         return -1;
//     };
// };

// O(logn)
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        while (end >= start) {
            let mid = Math.ceil((start + end) / 2);
            let isBad = isBadVersion(mid);
            if (isBad && (mid - 1 > 0 || !(mid - 1)) && !isBadVersion(mid - 1)) {
                return mid;
            } else if (isBad) {
                end = mid - 1;
            } else {
                start = mid;
            }
        }

        return -1;
    };
};