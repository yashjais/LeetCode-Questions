// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const strsMap = new Map();
    const strsLen = strs.length;

    for (let i = 0; i < strsLen; i += 1) {
        const sortedWord = strs[i].split('').sort().join('');
        if (strsMap.has(sortedWord)) {
            const wordArr = strsMap.get(sortedWord);
            wordArr.push(strs[i]);
            strsMap.set(sortedWord, wordArr);
        } else {
            strsMap.set(sortedWord, [strs[i]]);
        }
    }

    const result = [];
    for (let [key, value] of strsMap) {
        result.push(value);
    }

    return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
