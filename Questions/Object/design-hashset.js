// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

// Example 1:

// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)

// Constraints:

// 0 <= key <= 106
// At most 104 calls will be made to add, remove, and contains.

// var MyHashSet = function() {
//     this.set = [];
// };

// /**
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.add = function(key) {
//     this.set.push(key);
// };

// /**
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.remove = function(key) {
//     if (this.set.includes(key)) {
//         this.set = this.set.filter(k => k !== key);
//         return this.set
//     } else {
//         return -1;
//     }
// };

// /**
//  * @param {number} key
//  * @return {boolean}
//  */
// MyHashSet.prototype.contains = function(key) {
//     if (this.set.includes(key)) {
//         return true;
//     }

//     return false;
// };

// /**
//  * Your MyHashSet object will be instantiated and called as such:
//  * var obj = new MyHashSet()
//  * obj.add(key)
//  * obj.remove(key)
//  * var param_3 = obj.contains(key)
//  */

var MyHashSet = function () {
    this.datas = new Set([]);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.datas.add(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    const finder = this.datas.has(key);

    if (finder) {
        this.datas.delete(key);
    }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.datas.has(key);
};
