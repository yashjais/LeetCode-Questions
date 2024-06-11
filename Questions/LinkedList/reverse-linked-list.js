// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// iterative approach
var reverseList = function (head) {
  if (!head?.next) return head;

  let currentNode = head;
  let previousNode = null;
  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
};

// recursive approach
// var reverseList = function(head) {
//     return reverseListRecursive(head, null);
// };

// function reverseListRecursive(current, prev) {
//     if (current === null) {
//         return prev;
//     }

//     const nextNode = current.next;
//     current.next = prev;
//     return reverseListRecursive(nextNode, current);
// }
