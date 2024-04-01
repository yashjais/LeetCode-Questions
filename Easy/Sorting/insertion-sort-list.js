// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

// The steps of the insertion sort algorithm:

// Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
// It repeats until no input elements remain.
// The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Constraints:

// The number of nodes in the list is in the range [1, 5000].
// -5000 <= Node.val <= 5000

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
var insertionSortList = function (head) {
  if (!head) return null;
  let curr = head;
  while (curr && curr.next) {
    let innerCurr = head,
      next = curr.next,
      innerPrev = null;
    if (curr.val > next.val) {
      while (innerCurr.val < next.val && next !== innerCurr) {
        innerPrev = innerCurr;
        innerCurr = innerCurr.next;
      }
      curr.next = next.next;
      if (innerPrev) {
        innerPrev.next = next;
        next.next = innerCurr;
      } else {
        next.next = head;
        head = next;
      }
    } else {
      curr = next;
    }
  }
  return head;
};

// more optimized solution // but still runtime is better of the obove sol
// var insertionSortList = function(head) {
//         let dummy = new ListNode(0, head);

//         let prev = head;
//         let curr = head.next;

//         while (curr != null) {
//             if (curr.val >= prev.val) {
//                 prev = curr;
//                 curr = curr.next;
//                 continue
//             }

//             let tmp = dummy;
//             while (curr.val > tmp.next.val) {
//                 tmp = tmp.next;
//             }

//             prev.next = curr.next;
//             curr.next = tmp.next;
//             tmp.next = curr;
//             curr = prev.next;
//         }
//         return dummy.next;
// };

// intertion sort implementation
// public class Solution {
//     public void insertionSort(int[] arr) {
//         // Mutates elements in arr by inserting out of place elements into appropriate
//         // index repeatedly until arr is sorted
//         for (int i = 1; i < arr.length; i++) {
//             int currentIndex = i;
//             while (currentIndex > 0 && arr[currentIndex - 1] > arr[currentIndex]) {
//                 // Swap elements that are out of order
//                 int temp = arr[currentIndex];
//                 arr[currentIndex] = arr[currentIndex - 1];
//                 arr[currentIndex - 1] = temp;
//                 currentIndex -= 1;
//             }
//         }
//     }
// }
