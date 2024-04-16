// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3

// Constraints:

// 0 <= index, val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.

// var ListNode = function(val) {
//     this.val = val;
//     this.next = null;
// };

// var MyLinkedList = function() {
//     this.head = null;
//     this.size = 0;
// };

// /**
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function(index) {
//     if (index < 0 || index >= this.size) return -1;
//     let current = this.head;
//     for (let i = 0; i < index; i++) {
//         current = current.next;
//     }
//     if (current) return current.val;
//     return -1;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
//     let newNode = new ListNode(val);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.size++;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
//     let newNode = new ListNode(val);
//     if (!this.head) {
//         this.head = newNode;
//     } else {
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }
//     this.size++;
// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(index, val) {
//     if (index < 0 || index > this.size) return;
//     if (index === 0) {
//         this.addAtHead(val);
//         return;
//     }
//     let newNode = new ListNode(val);
//     let prev = null;
//     let current = this.head;
//     for (let i = 0; i < index; i++) {
//         prev = current;
//         current = current.next;
//     }
//     newNode.next = current;
//     prev.next = newNode;
//     this.size++;
// };

// /**
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//     if (index < 0 || index > this.size) return;
//     let prev = null;
//     let current = this.head;
//     if (index === 0) {
//         this.head = current.next;
//     } else {
//         for (let i = 0; i < index; i++) {
//             prev = current;
//             current = current.next;
//         }
//         if (current) {
//             prev.next = current.next;
//             this.size--;
//         } else {
//             return;
//         }
//     }
// };

// /**
//  * Your MyLinkedList object will be instantiated and called as such:
//  * var obj = new MyLinkedList()
//  * var param_1 = obj.get(index)
//  * obj.addAtHead(val)
//  * obj.addAtTail(val)
//  * obj.addAtIndex(index,val)
//  * obj.deleteAtIndex(index)
//  */

// optimized sol
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

var MyLinkedList = function () {
  this.left = new Node(); // Sentinel node as dummy head
  this.right = new Node(); // Sentinel node as dummy tail

  // Initialize the list to be empty by connecting the dummy head and tail
  this.left.next = this.right;
  this.right.prev = this.left;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let cur = this.left.next;

  while (cur !== this.right && index > 0) {
    cur = cur.next;
    index--;
  }

  if (cur === this.right) return -1; // Reached the dummy tail or the index is out of bounds

  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newHead = new Node(val);

  let currentHead = this.left.next;

  newHead.prev = this.left;
  this.left.next = newHead;

  currentHead.prev = newHead;
  newHead.next = currentHead;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newTail = new Node(val);

  let currentTail = this.right.prev;

  newTail.next = this.right;
  newTail.prev = currentTail;
  this.right.prev = newTail;

  currentTail.next = newTail;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);
  let cur = this.left.next;

  while (cur !== this.right && index > 0) {
    cur = cur.next;
    index--;
  }

  if (index > 0) return; // Index is beyond the current list length

  let prev = cur.prev;
  newNode.next = cur;
  newNode.prev = prev;
  prev.next = newNode;
  cur.prev = newNode;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let cur = this.left.next;

  while (cur !== this.right && index > 0) {
    cur = cur.next;
    index--;
  }

  if (cur === this.right) return; // Index is out of bounds

  let prev = cur.prev;
  let next = cur.next;

  prev.next = next;
  next.prev = prev;
};
