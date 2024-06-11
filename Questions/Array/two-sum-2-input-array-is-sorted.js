// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Constraints:

// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// can't be solved by counts algo -- cuz we need the indexes
// var twoSum = function(numbers, target) {
//     const counts = new Array(2001).fill(0);
//     const numbersLen = numbers.length;
//     for (let i = 0; i < numbersLen; i += 1) {
//         counts[i + 1000]++;
//     }

//     for (let i = 0; i < 2001; i++) {
//         let tar = target - (counts[i] + 1000);
//         // check if tar is present
//         // can only return true or false from here
//     }
// };

// const twoSum = (nums, target) => {
//     const numsMap = new Map();
//     const numbersLen = nums.length;

//     for (let i = 0; i < numbersLen; i += 1) {
//         if (numsMap.has(nums[i])) {
//             const tarVal = numsMap.get(nums[i]);
//             tarVal.push([i + 1]);
//         } else {
//             numsMap.set(nums[i], [i + 1]);
//         }
//     }

//     for (let [key, value] of numsMap) {
//         const tar = target - key;
//         if (numsMap.has(tar)) {
//             const tarVal = numsMap.get(tar);
//             if (tarVal.length > 1) return tarVal;
//             return [value, tarVal[0]];
//         }
//     }
// };

// a little better solution
// var twoSum = function (numbers, target) {
//     let numsMap = new Map();
//     const numbersLen = numbers.length;

//     for (let i = 0; i < numbersLen; i++) {
//         let index = numsMap.get(target - numbers[i]);
//         if (index) {
//             return [Number(index)+1, i+1];
//         }
//         numsMap.set(numbers[i], String(i));
//     }

//     return [];
// };

// more optimized solution
var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1];
        }

        if (numbers[i] + numbers[j] < target) {
            i++;
        } else {
            j--;
        }
    }
};

console.lgo(twoSum([2, 7, 11, 15], 9));
console.lgo(twoSum([2,3,4], 6));