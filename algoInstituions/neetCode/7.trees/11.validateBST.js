function isValidBST(root) {
       const dfs = (node, left, right) => {
         if (!node) {
           return true;
         }
         if (left >= node.val || right <= node.val) {
           return false;
         }
         return (
           dfs(node.left, left, node.val) && dfs(node.right, node.val, right)
         );
       };
       return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INVINITY);
}
