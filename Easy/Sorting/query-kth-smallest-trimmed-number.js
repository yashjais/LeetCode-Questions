// You are given a 0-indexed array of strings nums, where each string is of equal length and consists of only digits.

// You are also given a 0-indexed 2D integer array queries where queries[i] = [ki, trimi]. For each queries[i], you need to:

// Trim each number in nums to its rightmost trimi digits.
// Determine the index of the kith smallest trimmed number in nums. If two trimmed numbers are equal, the number with the lower index is considered to be smaller.
// Reset each number in nums to its original length.
// Return an array answer of the same length as queries, where answer[i] is the answer to the ith query.

// Note:

// To trim to the rightmost x digits means to keep removing the leftmost digit, until only x digits remain.
// Strings in nums may contain leading zeros.

// Example 1:

// Input: nums = ["102","473","251","814"], queries = [[1,1],[2,3],[4,2],[1,2]]
// Output: [2,2,1,0]
// Explanation:
// 1. After trimming to the last digit, nums = ["2","3","1","4"]. The smallest number is 1 at index 2.
// 2. Trimmed to the last 3 digits, nums is unchanged. The 2nd smallest number is 251 at index 2.
// 3. Trimmed to the last 2 digits, nums = ["02","73","51","14"]. The 4th smallest number is 73.
// 4. Trimmed to the last 2 digits, the smallest number is 2 at index 0.
//    Note that the trimmed number "02" is evaluated as 2.
// Example 2:

// Input: nums = ["24","37","96","04"], queries = [[2,1],[2,2]]
// Output: [3,0]
// Explanation:
// 1. Trimmed to the last digit, nums = ["4","7","6","4"]. The 2nd smallest number is 4 at index 3.
//    There are two occurrences of 4, but the one at index 0 is considered smaller than the one at index 3.
// 2. Trimmed to the last 2 digits, nums is unchanged. The 2nd smallest number is 24.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i].length <= 100
// nums[i] consists of only digits.
// All nums[i].length are equal.
// 1 <= queries.length <= 100
// queries[i].length == 2
// 1 <= ki <= nums.length
// 1 <= trimi <= nums[i].length

// Follow up: Could you use the Radix Sort Algorithm to solve this problem? What will be the complexity of that solution?

/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */

/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
// js sort implementation
// var smallestTrimmedNumbers = function(nums, queries) {
//     const queriesLen = queries.length;
//     const numsLen = nums.length;
//     const nLen = nums[0].length;
//     console.log(nLen)

//     const returnResult = [];
//     for (let i = 0; i < queriesLen; i += 1) {
//         const smallestNumVal = queries[i][0];
//         const trimNum = queries[i][1];


//         const nums1 = [...nums].map(n => n.substr((nLen - trimNum), nLen))
//         const sortedNums = [...nums1].sort((a, b) => a - b);
//         console.log('nums1', nums1)
//         console.log('sortedNums', sortedNums)
//         const smallestVal = sortedNums[smallestNumVal - 1];
//         console.log('smallestVal', smallestVal);

//         for (let j = numsLen - 1; j >= 0; j -= 1) {
//             if (smallestVal === nums1[j]) {
//                 returnResult.push(j);
//                 break;
//             }
//         }
//     }

//     return returnResult;
// };

const countingSort = (arr, placeVal) => {
    // Sorts an array of integers where minimum value is 0 and maximum value is NUM_DIGITS
    const NUM_DIGITS = 10;
    const counts = new Array(NUM_DIGITS).fill(0);
    const arrLen = arr.length;

    for (let i = 0; i < arrLen; i += 1) {
        let current = Math.trunc(arr[i] / placeVal);
        // console.log('current', current)
        counts[current % NUM_DIGITS] += 1;
    }
    // console.log('in counting sort', arr, placeVal, arrLen, counts)

    // we now overwrite our original counts with the starting index
    // of each digit in our group of digits
    let startingIndex = 0;
    for (let i = 0; i < counts.length; i++) {
        const count = counts[i];
        counts[i] = startingIndex;
        startingIndex += count;
    }
    // console.log('in counting sort', counts)

    let sortedArray = new Array(arrLen).fill(0);
    for (let i = 0; i < arrLen; i++) {
        const current = Math.trunc(arr[i] / placeVal);
        // console.log(counts[current % NUM_DIGITS], current, current % NUM_DIGITS)
        sortedArray[counts[current % NUM_DIGITS]] = arr[i];
        // since we have placed an item in index counts[current % NUM_DIGITS],
        // we need to increment counts[current % NUM_DIGITS] index by 1 so the
        // next duplicate digit is placed in appropriate index
        counts[current % NUM_DIGITS] += 1;
    }
    // sortedArray = sortedArray.filter((ele) => ele);
    // console.log('sorted arr', sortedArray)


    // common practice to copy over sorted list into original arr
    // it's fine to just return the sortedArray at this point as well
    for (let i = 0; i < arrLen; i++) {
        arr[i] = sortedArray[i];
    }
};

// radix sort
var smallestTrimmedNumbers = function(nums, queries) {
    const queriesLen = queries.length;
    const numsLen = nums.length;
    const nLen = nums[0].length;
    // console.log(nLen)

    const returnResult = [];
    for (let i = 0; i < queriesLen; i += 1) {
        const smallestNumVal = queries[i][0];
        const trimNum = queries[i][1];


        const nums1 = [...nums].map(n => n.substr((nLen - trimNum), nLen));
        const sortedNums = [...nums1];

        // sort the arr
        let maxElem = Number.NEGATIVE_INFINITY
        for (let j = 0; j < numsLen; j += 1) {
            if (nums1[j] > maxElem) {
                maxElem = nums1[j];
            }
        }

        // console.log('maxElem', maxElem);
        let placeVal = 1;
        while ((maxElem / placeVal) > 1) {
            console.log('in while', maxElem, placeVal, maxElem/placeVal, (maxElem / placeVal) > 0)
            countingSort(sortedNums, placeVal);
            placeVal *= 10;
        }

        // console.log('nums1', nums1)
        // console.log('sortedNums', sortedNums)
        const smallestVal = sortedNums[smallestNumVal - 1];
        // console.log('smallestVal', smallestVal);

        for (let j = numsLen - 1; j >= 0; j -= 1) {
            if (smallestVal === nums1[j]) {
                returnResult.push(j);
                break;
            }
        }
    }

    return returnResult;
};

console.log(smallestTrimmedNumbers(["24","37","96","04"], [[2,1],[2,2]]))