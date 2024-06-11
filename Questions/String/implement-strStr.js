// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.



// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// brute force solution
// var strStr = function(haystack, needle) {
//     const haystackLen = haystack.length;
//     const needleLen = needle.length;

//     if (needleLen > haystackLen) return -1;

//     let i = 0;
//     let j = 0;
//     let tempI = 0;
//     while (i < haystackLen) {
//         if (haystack[i] === needle[j]) {
//             if (j === 0) tempI = i;
//             if (j === needleLen - 1) return ((i + 1) - needleLen);
//             j += 1;
//         } else if (j > 0) {
//             // roll back i to the last point where it started matching
//             i = tempI;
//             j = 0;
//         } else {
//             j = 0;
//         }

//         i += 1;
//     }

//     return -1;
// };

var strStr = function(haystack, needle) {
    const haystackLen = haystack.length;
    const needleLen = needle.length;

    for (let i = 0; i < haystackLen; i++) {
        if (haystack[i] === needle[0]) {
            let target = haystack.slice(i, i + needleLen);
            if (target === needle) return i;
        }
    }

    return -1;
};

console.log(strStr('sadbutsaa', 'saa'))