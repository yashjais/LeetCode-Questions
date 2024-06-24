// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const sMap = new Map();
    // const tMap = new Map();
    const sLen = s.length;

    const sSet = [...new Set(s.split(""))]
    const tSet = [...new Set(t.split(""))]

    if(sSet.length !== tSet.length){
        return false;
    }

    for (let i = 0; i < sLen; i += 1) {
        if (sMap.has(s[i])) {
            const alp = sMap.get(s[i]);
            if (alp !== t[i]) return false;
        } else {
            sMap.set(s[i], t[i])
        }

        // if (tMap.has(t[i])) {
        //     const alp = tMap.get(t[i]);
        //     if (alp !== s[i]) return false;
        // } else {
        //     tMap.set(t[i], s[i])
        // }
    }

    return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
