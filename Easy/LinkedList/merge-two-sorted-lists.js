// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {
//     if (list1 == null) {
//         return list2;
//     } else if (list2 == null) {
//         return list1;
//     } else if (list1 == null && list2 == null) {
//         return [];
//     }

//     let sortedList = null;
//     let tail = null;

//     while (list1 && list2) {
//         let node;
//         if (list1.val < list2.val) {
//             node = list1;
//             list1 = list1.next;
//         } else {
//             node = list2;
//             list2 = list2.next;
//         }

//         if (!sortedList) {
//             sortedList = node;
//             tail = node;
//         } else {
//             tail.next = node;
//             tail = node;
//         }
//     }

//     // Append the remaining nodes if any
//     if (list1) {
//         if (!sortedList) {
//             sortedList = list1;
//         } else {
//             tail.next = list1;
//         }
//     } else if (list2) {
//         if (!sortedList) {
//             sortedList = list2;
//         } else {
//             tail.next = list2;
//         }
//     }

//     return sortedList;

// };


var mergeTwoLists = function(list1, list2) {
    if (list1 == null) {
        return list2;
    } else if (list2 == null) {
        return list1;
    } else if (list1 == null && list2 == null) {
        return [];
    }

    let sortedList = null;
    let tail = null
    while(list1 && list2) {
        if (list1.val < list2.val) {
            const tempList1 = list1.next;
            list1.next = null;
            if (sortedList) {
                tail.next = list1;
                tail = list1;
            } else {
                sortedList = list1;
                tail = list1;
            }
            list1 = tempList1;
        } else if (list1.val > list2.val) {
            const tempList2 = list2.next;
            list2.next = null;
            if (sortedList) {
                tail.next = list2;
                tail = list2;
            } else {
                sortedList = list2;
                tail = list2;
            }
            list2 = tempList2;
        } else {
            const tempList1 = list1.next;
            const tempList2 = list2.next;
            list1.next = null;
            list2.next = null;
            if (sortedList) {
                tail.next = list2;
                list2.next = list1;
                tail = list1;
            } else {
                sortedList = list1;
                sortedList.next = list2;
                tail = list2;
            }
            list1 = tempList1;
            list2 = tempList2;
        }
    }

    if (list1) {
        tail.next = list1;
    }

    if (list2) {
        tail.next = list2;
    }

    return sortedList;
};