// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".



// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0


// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// var numJewelsInStones = function(jewels, stones) {
//     const jewelsSet = new Set();
//     jewels.split('').forEach((j) => jewelsSet.add(j));

//     let output = 0;
//     stones.split('').forEach((s) => {
//         if (jewelsSet.has(s)) {
//             output += 1
//         }
//     });

//     return output;
// };

var numJewelsInStones = function(jewels, stones) {
    const jewelLen = jewels.length;
    let jMap = new Set();
    for (let i = 0; i < jewelLen; i++) {
        jMap.add(jewels[i]);
    }

    const stonesLen = stones.length;
    let count = 0
    for (let i = 0; i < stonesLen; i++) {
        if (jMap.has(stones[i])) count++;
    }

    return count
};

console.log(newJewelsInStones("aA", "aAAbbbb"));
