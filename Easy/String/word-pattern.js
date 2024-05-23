// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false


// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const arr = s.split(' ');
    const arrLen = arr.length;
    const patternLen = pattern.length;
    const patternMap = new Map();

    if (patternLen !== arrLen) return false;
    if (new Set(pattern).size  !== new Set(arr).size) return false;

    let i = 0;
    while (i < arrLen) {
        if (patternMap.has(pattern[i])) {
            const gotchya = patternMap.get(pattern[i]);
            if (gotchya !== arr[i]) return false;
        } else {
            patternMap.set(pattern[i], arr[i]);
        }

        i += 1;
    }

    return true;
};

console.log(wordPattern(pattern = "abba", s = "dog cat cat dog"))