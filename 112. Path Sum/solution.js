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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) return root.val === targetSum ? true : false;

  let result = false;

  function preOrderTraversal(currNode, currSum) {
    currSum += currNode.val;

    if (currNode.left) {
      preOrderTraversal(currNode.left, currSum);
    }

    if (currNode.right) {
      preOrderTraversal(currNode.right, currSum);
    }

    if (currSum === targetSum && !currNode.left && !currNode.right)
      result = true;
  }

  preOrderTraversal(root, 0);

  return result;
};
