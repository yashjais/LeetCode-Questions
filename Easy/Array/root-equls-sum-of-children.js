/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
  return root.val === root.left.val + root.right.val;
};

console.log(checkTree({ val: 10, left: { val: 4 }, right: { val: 6 } }));
console.log(checkTree({ val: 6, left: { val: 3 }, right: { val: 2 } }));
