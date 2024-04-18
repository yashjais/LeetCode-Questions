// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

var removeNthFromEnd = function (head, n) {
  if (head.next == null) return null; // size === 1

  let size = 0;
  let node = head;

  while (node) {
    size += 1;
    node = node.next;
  }

  if (size === n) {
    return head.next;
  }

  node = head;
  while (node) {
    if (size - 1 === n) {
      let retrunVal = node.next;
      let val = node.next.next;
      node.next = val;
      break;
    }
    size -= 1;
    node = node.next;
  }

  return head;
};
