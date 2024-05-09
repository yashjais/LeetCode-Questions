// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1


// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function(s) {
//     const characMap = new Map();
//     const sLen = s.length;

//     for (let i = 0; i < sLen; i += 1) {
//         if (characMap.has(s[i])) {
//             let arr = characMap.get(s[i]);
//             arr = [arr[0] + 1, arr[1]] 
//             characMap.set(s[i], arr);
//         } else {
//             characMap.set(s[i], [0, i]);
//         }
//     }

//     for (let [charac, arr] of characMap) {
//         if (arr[0] === 0) {
//             return arr[1]
//         }
//     }

//     return -1;
// };

var firstUniqChar = function(s) {
    let map = new Array(26).fill(0);
    let aIndex = 'a'.charCodeAt(0);
    let sLen = s.length;

    for (let i = 0;i < sLen; i += 1) {
        let index = s.charCodeAt(i) - aIndex;
        map[index]++;
    }

    for (let i = 0; i < sLen; i += 1) {
        let index = s.charCodeAt(i) - aIndex;
        if (map[index] == 1){
            return i;
        }
    }

    return -1
};

console.log(firstUniqChar("loveleetcode"));