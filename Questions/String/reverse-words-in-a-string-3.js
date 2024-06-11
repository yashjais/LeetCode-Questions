// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"


// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(ele => ele.split('').reverse().join('')).join(' ')
//     const sLen = s.length;
//     let startWordIndex = null;
//     let i = 0;

//     while (i < sLen) {
//         if (!startWordIndex && s[i]) {
//             startWordIndex = i;
//         }

//         if ((!s[i] && startWordIndex) || (startWordIndex && i === sLen - 1)) {
//             // reverse the string
//             startWordIndex = null;
//         }

//         i += 1;
//     }
};

console.log(reverseWords("Let's take LeetCode contest"))