// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Approach 1, copy the list into array and find the palindrome
// var isPalindrome = function(head) {
//     if (!head) return head;

//     const arr = [];

//     while(head) {
//         arr.push(head.val);
//         head = head.next;
//     }

//     const arrLen = arr.length;
//     let lastIndex = arrLen - 1;
//     for (let i = 0; i < arrLen/2; i += 1) {
//         if (arr[i] !== arr[lastIndex]) {
//             return false;
//         }
//         lastIndex -= 1;
//     }

//     return true;
// };

// Approach 2
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  // Reverse the first half of the linked list
  let prev = null;
  let current = head;
  while (current !== slowPointer) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  // if the list len have odd number
  if (fastPointer) {
    slowPointer = slowPointer.next;
  }

  while (slowPointer) {
    if (slowPointer.val !== prev.val) return false;
    slowPointer = slowPointer.next;
    prev = prev.next;
  }

  return true;
};
