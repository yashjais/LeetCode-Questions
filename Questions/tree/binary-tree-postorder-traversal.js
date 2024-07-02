// Given the root of a binary tree, return the postorder traversal of its nodes' values.



// Example 1:


// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]


// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
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
// var postorderTraversal = function(root) {
//     const result = [];

//     const traverse = (node, result) => {
//         if (!node) return;

//         if (node?.left) traverse(node.left, result);
//         if (node?.right) traverse(node.right, result);
//         result.push(node.val);
//     };

//     traverse(root, result);

//     return result;
// };

var postorderTraversal = function(root) {
    const result = [];
    function postorder(root){
        if (!root) return;

        postorder(root.left);
        postorder(root.right);
        result.push(root.val);        
    }

    postorder(root);
    return result;
};