
 // * Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let size = 0;
    let copyList = head;
    while (copyList?.val) {
        size += 1;
        copyList = copyList.next;
    }
    const halfSize = Math.floor(size/2);

    let count = 0;
    let returnList;
    while (head?.val) {
        count += 1;
        if (head.next) {
            head = head.next;
        } else {
            returnList = head;
            break;
        }

        if (halfSize === count) {
            returnList = head;
            break;
        }
    }

    return returnList;
};

// const middleNode = function(head) {
//     // Initialize two pointers, one slow and one fast, both starting from the head of the list
//     let slowPointer = head;
//     let fastPointer = head;

//     // Traverse the list with the fast pointer moving twice as fast as the slow pointer
//     while (fastPointer && fastPointer.next) {
//         slowPointer = slowPointer.next; // Move slow pointer one step
//         fastPointer = fastPointer.next.next; // Move fast pointer two steps
//     }

//     // When the fast pointer reaches the end of the list, the slow pointer will be at the middle
//     return slowPointer;
// };

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(middleNode(head)); // Output: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }
