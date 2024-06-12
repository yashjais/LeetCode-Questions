// Selection Sort

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// brute force solution
// var sortColors = function(nums) {
//     const numsLength = nums.length;

//     for (let i = 0; i < numsLength; i += 1) {
//         for (let j = i + 1; j < numsLength; j += 1) {
//             let temp;
//             if (nums[i] > nums[j]) {
//                 temp = nums[j];
//                 nums[j] = nums[i];
//                 nums[i] = temp;
//             }
//         }
//     }

//     return nums;
// };

// js sort
//  var sortColors = function(nums) {
//     return nums.sort((a, b) => a - b)
// };

// optimized solution
// var sortColors = function(nums) {
//     let n = nums.length;
//     if(n == 1) return;

//     let pointer0 = 0;
//     let pointer1 = 0;
//     let pointer2 = nums.length-1;

//     while(pointer1<=pointer2){
//         if(nums[pointer1]==0){
//             let temp = nums[pointer0];
//             nums[pointer0] = nums[pointer1];
//             nums[pointer1] = temp;
//             pointer0++;
//             pointer1++;
//         }else if(nums[pointer1] == 2){
//             let temp = nums[pointer2]
//             nums[pointer2] = 2;
//             nums[pointer1] = temp;
//             pointer2--;
//         }else{
//             pointer1++;
//         }
//     }
// };

// JAVA Counting Sort
// public class Solution {
//     public void countingSort(int[] arr) {
//         // Sorts an array of integers where minimum value is 0 and maximum value is K
//         int K = Arrays.stream(arr).max().getAsInt();
//         int[] counts = new int[K + 1];
//         for (int elem : arr) {
//             counts[elem] += 1;
//         }
//         // we now overwrite our original counts with the starting index
//         // of each element in the final sorted array
//         int startingIndex = 0;
//         for (int i = 0; i < K + 1; i++) {
//             int count = counts[i];
//             counts[i] = startingIndex;
//             startingIndex += count;
//         }

//         int sortedArray[] = new int[arr.length];
//         for (int elem : arr) {
//             sortedArray[counts[elem]] = elem;
//             // since we have placed an item in index counts[elem], we need to
//             // increment counts[elem] index by 1 so the next duplicate element
//             // is placed in appropriate index
//             counts[elem] += 1;
//         }

//         // common practice to copy over sorted list into original arr
//         // it's fine to just return the sortedArray at this point as well
//         for (int i = 0; i < arr.length; i++) {
//             arr[i] = sortedArray[i];
//         }
//     }
// }

// JS Counting Sort
// var sortColors = function (nums) {
//   const numsLength = nums.length;

//   const counts = new Array(numsLength + 1).fill(0);
//   for (let i = 0; i < numsLength; i += 1) {
//     counts[nums[i]] += 1;
//   }
//   console.log(counts);

//   let startingIndex = 0;
//   for (let i = 0; i < numsLength + 1; i += 1) {
//     let count = counts[i];
//     counts[i] = startingIndex;
//     startingIndex += count;
//   }
//   console.log(counts);

//   const copiedArr = [...nums];
//   for (let i = 0; i < numsLength; i += 1) {
//     const num = copiedArr[i];
//     console.log("num", num);
//     const index = counts[num];
//     console.log("index", index);
//     nums[index] = num;
//     counts[num] += 1;
//   }
//   console.log(nums);
// };

// more optimized solu
var sortColors = function(nums) {
    const numsLen = nums.length;
    let isSorted = false;
    while(!isSorted){
        isSorted = true;
        for(let i = 0; i < numsLen - 1; i++){
            if(nums[i] > nums[i + 1]){
                isSorted = false;
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            }
        }
    }
};

// console.log(sortColors([5, 4, 5, 5, 1, 1, 3]));
// console.log(sortColors([2, 0]));
// console.log(sortColors([2, 2]));
console.log(sortColors([1, 3, 4, 0, 0]));
