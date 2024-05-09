// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     const characMap = new Map();
//     const sLen = s.length;
//     const tLen = t.length;
//     if (sLen !== tLen) return false;

//     for (let i = 0; i < sLen; i += 1) {
//         if (characMap.has(s[i])) {
//             const count = characMap.get(s[i]);
//             characMap.set(s[i], count + 1)
//         } else {
//             characMap.set(s[i], 1)
//         }
//     }

//     for (let i = 0; i <tLen; i += 1) {
//         if (characMap.has(t[i])) {
//             const count = characMap.get(t[i]) - 1;
//             if (count) {
//                 characMap.set(t[i], count);
//             } else {
//                 characMap.delete(t[i]);
//             }
//         } else {
//             return false;
//         }
//     }

//     if (characMap.size) return false;
//     return true;
// };

// more optimized sol
const isAnagram = (s, t) => {
    const characMap = new Array(26).fill(0);
    const sLen = s.length;
    const tLen = t.length;
    if (sLen !== tLen) return false;

    for (let i = 0;i < sLen; i += 1) {
        characMap[s.charCodeAt(i) - 97 ]++;
    }

    for (let i = 0;i < tLen; i += 1) {
        characMap[t.charCodeAt(i) - 97 ]--;
    }


    for (let i = 0;i < 26; i += 1) {
        if (characMap[i] !== 0) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram('rat', 'tar'))