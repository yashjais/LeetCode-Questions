// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     const sLen = s.length;
//     if (sLen < 2) return true;
//     // 48 - 57 -> 0 - 9
//     // 97 - 122 -> a - z
//     // const characCodes = [];
//     // for (let i = 48; i <= 57; i++) {
//     //     numbers.push(i);
//     // }
//     // for (let i = 97; i <= 112; i++) {
//     //     numbers.push(i);
//     // }

//     let i = 0;
//     let j = sLen - 1;
//     while (i < j) {
//         // console.log(i, s[i], s[i].toLowerCase(), s[i].toLowerCase().charCodeAt(0))
//         // console.log(j, s[j], s[j].toLowerCase(), s[j].toLowerCase().charCodeAt(0))
//         if (((s[i].toLowerCase().charCodeAt(0) >= 97 &&
//     s[i].toLowerCase().charCodeAt(0) <= 122) || (s[i].toLowerCase().charCodeAt(0) >= 48 &&
//     s[i].toLowerCase().charCodeAt(0) <= 57)) &&
//     ((s[j].toLowerCase().charCodeAt(0) >= 97 &&
//     s[j].toLowerCase().charCodeAt(0) <= 122) || ((s[j].toLowerCase().charCodeAt(0) >= 48 &&
//     s[j].toLowerCase().charCodeAt(0) <= 57)))) {
//             // console.log('in the if')
//             if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
//             i += 1;
//             j -= 1;
//         } else if ((s[j].toLowerCase().charCodeAt(0) >= 97 &&
//     s[j].toLowerCase().charCodeAt(0) <= 122) || ((s[j].toLowerCase().charCodeAt(0) >= 48 &&
//     s[j].toLowerCase().charCodeAt(0) <= 57))) {
//             // console.log('in the else if of i')
//             i += 1;
//         } else if (((s[i].toLowerCase().charCodeAt(0) >= 97 &&
//     s[i].toLowerCase().charCodeAt(0) <= 122) || (s[i].toLowerCase().charCodeAt(0) >= 48 &&
//     s[i].toLowerCase().charCodeAt(0) <= 57))) {
//             // console.log('in the else if of j')
//             j -= 1;
//         } else {
//             i += 1;
//             j -= 1;
//         }
//     }

//     return true;
// };

// optimized solution

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const cleanInput = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();

    let i = 0;
    let j = cleanInput.length - 1;
    while (i < j) {
        if (cleanInput[i] !== cleanInput[j]) return false;
        i += 1;
        j -= 1;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
