/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var minDepth = function (root) {
  // 根节点为 0
  if (root == null) return 0;
  else if (root.left == null) {
    // 如果当前节点的左节点为空。那么计算出右节点的深度，并加一。
    return minDepth(root.right) + 1;
  } else if (root.right == null) {
    // 如果当前节点的右节点为空。那么计算出左节点的深度，并加一。
    return minDepth(root.left) + 1;
  } else {
    // 最终比较左右节点的深度，取最小值，并加一
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }
};