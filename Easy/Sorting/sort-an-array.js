// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.



// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.


// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// js sort function
// var sortArray = function(nums) {
//     return nums.sort((a, b) => a - b);
// };

// heap sort
// var sortArray = function(nums) {
//     function maxHeapify(nums, heapSize, index) {
//         let left = 2 * index + 1;
//         let right = 2 * index + 2;
//         let largest = index;
//         if (left < heapSize && nums[left] > nums[largest]) {
//             largest = left;
//         }
//         if (right < heapSize && nums[right] > nums[largest]) {
//             largest = right;
//         }  
//         if (largest !== index) {
//             let temp = nums[index];
//             nums[index] = nums[largest];
//             nums[largest] = temp;
//             maxHeapify(nums, heapSize, largest);
//         }
//     }

//     // Mutates elements in nums by utilizing the heap data structure
//     for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
//         maxHeapify(nums, nums.length, i);
//     }
//     console.log('nums', nums);

//     for (let i = nums.length - 1; i > 0; i--) {
//         // swap last element with first element
//         let temp = nums[i];
//         nums[i] = nums[0];
//         nums[0] = temp;
//         // note that we reduce the heap size by 1 every iteration
//         maxHeapify(nums, i, 0);
//     }

//     return nums;
// };

// counting sort
var sortArray = function(arr) {
    if (arr.length === 0) return arr;

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const range = max - min + 1;

    const count = new Array(range).fill(0);

    // Count occurrences of each element
    arr.forEach(num => {
        count[num - min]++;
    });

    // Modify count array to store cumulative count
    for (let i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }

    // Build the sorted array
    const sortedArr = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        sortedArr[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    return sortedArr;
}

// java implementation
// public class Solution {
//     public void heapSort(int[] arr) {
//         // Mutates elements in lst by utilizing the heap data structure
//         for (int i = arr.length / 2 - 1; i >= 0; i--) {
//             maxHeapify(arr, arr.length, i);
//         }

//         for (int i = arr.length - 1; i > 0; i--) {
//             // swap last element with first element
//             int temp = arr[i];
//             arr[i] = arr[0];
//             arr[0] = temp;
//             // note that we reduce the heap size by 1 every iteration
//             maxHeapify(arr, i, 0);
//         }
//     }

//     private void maxHeapify(int[] arr, int heapSize, int index) {
//         int left = 2 * index + 1;
//         int right = 2 * index + 2;
//         int largest = index;
//         if (left < heapSize && arr[left] > arr[largest]) {
//             largest = left;
//         }
//         if (right < heapSize && arr[right] > arr[largest]) {
//             largest = right;
//         }  
//         if (largest != index) {
//             int temp = arr[index];
//             arr[index] = arr[largest];
//             arr[largest] = temp;
//             maxHeapify(arr, heapSize, largest);
//         }
//     }
// }

console.log(sortArray([5,2,3,1]));