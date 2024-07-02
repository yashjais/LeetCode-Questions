// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersect = function(nums1, nums2) {
//     const map1 = new Map();
//     const resultArr = [];

//     const nums1Len = nums1.length;
//     for (let i = 0; i < nums1Len; i += 1) {
//         if (map1.has(nums1[i])) {
//             const count = map1.get(nums1[i]);
//             map1.set(nums1[i], (count + 1));
//         } else {
//             map1.set(nums1[i], 1)
//         }
//     }

//     const nums2Len = nums2.length;    
//     for (let i = 0; i < nums2Len; i += 1) {
//         if (map1.get(nums2[i])) {
//             resultArr.push(nums2[i])
//             const count = map1.get(nums2[i]);
//             map1.set(nums2[i], count - 1)
//         }
//     }

//     return resultArr;
// };

// solving as a daily challenge on 2nd July
// var intersect = function(nums1, nums2) {
//     const numMap = new Map();
//     const nums1Len = nums1.length;
//     const nums2Len = nums2.length;
//     const resultArr = [];

//     for (let i = 0; i < nums1Len; i += 1) {
//         if (numMap.has(nums1[i])) {
//             numMap.set(nums1[i], numMap.get(nums1[i]) + 1);
//         } else {
//             numMap.set(nums1[i], 1);
//         }
//     }

//     for (let i = 0; i < nums2Len; i += 1) {
//         if (numMap.has(nums2[i])) {
//             const count = numMap.get(nums2[i]);
//             if (count === 0) {
//                 numMap.delete(nums2[i]);
//             } else {
//                 resultArr.push(nums2[i]);
//                 numMap.set(nums2[i], count - 1);
//             }
//         }
//     }

//     return resultArr;
// }

const countingSort = (nums) => {
    const numsLength = nums.length;
    const countArray = new Array(1001).fill(0);

    for (let i = 0; i < numsLength; i += 1) {
        countArray[nums[i]] += 1;
    }

    for (let i = 1; i < 1002; i += 1) {
        countArray[i] += countArray[i - 1];
    }


    const resultArr = [];
    for (let i = 1001; i >= 0; i -= 1) {
        resultArr[countArray[nums[i]] - 1] = nums[i];
        countArray[nums[i]] -= 1;
    }

    return resultArr;
};

var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);
    const nums1Len = nums1.length;
    const nums2Len = nums2.length;
    // nums1 = countingSort(nums1);
    // nums2 = countingSort(nums2);

    let i = 0;
    let j = 0;
    let returnArray = [];

    while (j < nums2Len && i < nums1Len){
        if (nums1[i] === nums2[j]){
            returnArray.push(nums1[i]);
            i += 1;
            j += 1;
        }
        else if (nums1[i] > nums2[j]){
            j += 1;
        }
        else {
            i += 1;
        }
    }

    return returnArray;
};

console.log(intersect((nums1 = [1, 2, 2, 1]), (nums2 = [2, 2])));
