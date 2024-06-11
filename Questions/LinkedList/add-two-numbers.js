// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Brute force
// var addTwoNumbers = function(l1, l2) {
//     let num1 = [];
//     let num2 = [];

//     while (l1) {
//         num1.push(l1.val);
//         l1 = l1.next;
//     }

//     while (l2) {
//         num2.push(l2.val);
//         l2 = l2.next;
//     }

//     let addedNum = BigInt(num1.reverse().join('')) + BigInt(num2.reverse().join(''));
//     addedNum = addedNum.toString().split('').reverse();


//     let returnList = null;
//     let tail = null;
//     for (let i = 0; i < addedNum.length; i += 1) {
//         const node = new ListNode(Number(addedNum[i]));
//         if (returnList) {
//             tail.next = node;
//             tail = node;
//         } else {
//             returnList = node;
//             tail = node;
//         }
//     }

//     return returnList;
// };


var addTwoNumbers = function(l1, l2) {
    let surplus = 0;
    let l3 = {
        val: 0,
        next: null
    };
    let current = l3;
    while (surplus > 0 || l1 != null || l2 != null) {
        const sum = surplus + (l1?.val || 0) + (l2?.val || 0);
        surplus = Math.trunc(sum / 10);
        let rest = sum % 10;
        current.val = rest;
        if(surplus > 0 || l1?.next != null || l2?.next != null) {
            current.next = {
                val: 0,
                next: null
            };
            current = current.next;
        }
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }
    return l3;
};