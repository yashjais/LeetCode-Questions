// Given the head of a linked list, rotate the list to the right by k places.



// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]


// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // determine the size
    // if the rotate is greater than the size
    // subtract the k with size to get the rotation
    if (k === 0 || !head || !head.next) return head;

    let size = 0; 
    let nodes = head;
    while (nodes) {
        size += 1;
        nodes = nodes.next;
    }

    let newK = k;

    if (k >= size) {
        newK = k % size;
    }

    if (!newK || newK === 0) return head;

    //     // First Approach
    //     // do the rotation here
        const rotation = (nodes) => {
            let prev;
            while (nodes.next) {
                prev = nodes;
                nodes = nodes.next;
            }

            const tempHead = nodes;
            prev.next = null;
            tempHead.next = head;
            head = tempHead;
            return tempHead;
        };

        nodes = head;
        while (newK !== 0) {
            nodes = rotation(nodes);
            newK -= 1;
        }

    //     // Second Approach
    //     // I know how many rotations are there
    //     // Just slice the list from the end
//     let rotation = size - newK;
//     nodes = head;
//     let prevNode;
//     while (rotation) {
//         prevNode = nodes;
//         nodes = nodes.next;
//         rotation -= 1;
//     }

//     const tempHead = nodes;
//     prevNode.next = null;

//     let lastNode = tempHead;
//     while (lastNode.next) {
//         lastNode = lastNode.next;
//     }

//     lastNode.next = head;
//     head = tempHead;

    return head;
};
