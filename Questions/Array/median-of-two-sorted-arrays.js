// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// O(N)
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    const nums1Len = nums1.length;
    const nums2Len = nums2.length;
    // const resultSet = new Set();
    const resultArr = [];

    while (i < nums1Len && j < nums2Len) {
        if (nums1[i] < nums2[j]) {
            // resultSet.add(nums1[i]);
            resultArr.push(nums1[i])
            i += 1;
        } else if (nums1[i] > nums2[j]) {
            // resultSet.add(nums2[j]);
            resultArr.push(nums2[j])
            j += 1;
        } else {
            // resultSet.add(nums1[i]);
            resultArr.push(nums1[i]);
            resultArr.push(nums2[j]);
            i += 1;
            j += 1;
        }
    }


    if (i < nums1Len) {
        // push all the i
        while (i < nums1Len) {
            // resultSet.add(nums1[i]);
            resultArr.push(nums1[i]);
            i += 1;
        }
    } else if (j < nums2Len) {
        // push all the j
        while (j < nums2Len) {
            // resultSet.add(nums2[j]);
            resultArr.push(nums2[j]);
            j += 1;
        }
    }

    // const resultArr = [...resultSet];
    // console.log('result', resultArr);
    if (resultArr.length % 2 === 0) {
        const middlePoint = Math.ceil(resultArr.length / 2);
        return (resultArr[middlePoint] + resultArr[middlePoint - 1]) / 2;
    } else {
        return resultArr[Math.floor(resultArr.length / 2)];
    }
};

console.log([1,3], [2]);
