// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.



// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
// Example 3:

// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".


// Constraints:

// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the strings of list1 are unique.
// All the strings of list2 are unique.
// There is at least a common string between list1 and list2.

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const list1Map = new Map();
    const list1Len = list1.length;
    for (let i = 0; i < list1Len; i += 1) {
        list1Map.set(list1[i], i);
    }

    const listMap = new Map();
    const list2Len = list2.length;
    let minimumIndexSum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < list2Len; i += 1) {
        if (list1Map.has(list2[i])) {
            const firstIndex = list1Map.get(list2[i]);
            const indexSum = firstIndex + i;
            if (listMap.has(indexSum)) {
                if (indexSum < minimumIndexSum) minimumIndexSum = indexSum;
                const list = listMap.get(indexSum);
                list.push(list2[i]);
                listMap.set(indexSum, list);
            } else {
                if (indexSum < minimumIndexSum) minimumIndexSum = indexSum;
                listMap.set(indexSum, [list2[i]]);
            }
        }
    }

    return listMap.get(minimumIndexSum);
    // for (let i = 0; i <= 2000; i += 1) {
    //     if (listMap.has(i)) return listMap.get(i);
    // }
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]));
