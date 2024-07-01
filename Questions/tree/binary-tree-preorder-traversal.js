// Given the root of a binary tree, return the preorder traversal of its nodes' values.



// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]


// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100


// Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//     const numbers = [];
//     const traverse = (node) => {
//         if (node?.val || node?.val === 0) numbers.push(node.val);
//         if (node?.left) {
//             traverse(node.left);
//         }
//         if (node?.right) {
//             traverse(node.right);
//         }
//     }

//     traverse(root);
//     return numbers;
// };

// more opt?
function preorder (node, a){
    if (node) {
        a.push(node.val);
        a = preorder(node.left,a);
        a = preorder(node.right,a);
    }

    return a;
};

var preorderTraversal = function(root) {
    if (root == null) return [];

    result = preorder(root,[]);

    return result;
};

