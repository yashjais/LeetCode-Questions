// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.



// Example 1:

// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.


// Constraints:

// -231 <= val <= 231 - 1
// At most 2 * 105 calls will be made to insert, remove, and getRandom.
// There will be at least one element in the data structure when getRandom is called.


// var RandomizedSet = function() {
//     this.value = [];
// };

// /** 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.insert = function(val) {
//     const value = this.value.find((ele) => ele === val);
//     if (value === undefined) {
//         this.value.push(val);
//         return true;
//     }

//     return false;
// };

// /** 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function(val) {
//     const value = this.value.find((ele) => ele === val);

//     if (value || value === 0) {
//         this.value = this.value.filter((ele) => ele !== val);
//         return true;
//     }

//     return false;
// };

// /**
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function() {
//     const randomIndex = Math.floor(Math.random() * this.value.length);
//     return this.value[randomIndex];
// };

// /** 
//  * Your RandomizedSet object will be instantiated and called as such:
//  * var obj = new RandomizedSet()
//  * var param_1 = obj.insert(val)
//  * var param_2 = obj.remove(val)
//  * var param_3 = obj.getRandom()
//  */


// // more opt solution with map
// var RandomizedSet = function() {
//     this.map = new Map()
//     this.list = []
// };

// /** 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.insert = function(val) {
//     if(this.map.has(val)) return false
//     this.list.push(val)
//     this.map.set(val, this.list.length - 1)
//     return true
// };

// /** 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function(val) {
//       if (!this.map.has(val)) return false;

//     const idxToRemove = this.map.get(val);
//     const lastElement = this.list[this.list.length - 1];

//     // Swap the last element with the one to remove
//     this.list[idxToRemove] = lastElement;
//     this.map.set(lastElement, idxToRemove);

//     // Remove the last element (now moved to idxToRemove)
//     this.list.pop();
//     this.map.delete(val);

//     return true;
// };

// /**
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function() {
//     const randomIndex = Math.floor(Math.random() * this.list.length);
//     return this.list[randomIndex];
// };


// more opt solution with set
var RandomizedSet = function() {
    this.set = new Set();
    this.list = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.set.has(val)) return false;
    this.set.add(val);
    this.list.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.set.has(val)) return false;

    this.set.delete(val);
    this.list = this.list.filter((ele) => ele !== val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.set.size);
    let item;

    for (let i = 0; i < this.set.size; i += 1) {
        if (i === randomIndex) {
            item = this.list[i];
            break;
        }
    }

    return item;
};