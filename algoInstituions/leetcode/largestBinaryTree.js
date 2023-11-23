var largestBSTSubtree = function(root) {
    //null nodes are also subtrees
    if (!root) {
        return 0;
    }

    let rootCount = dfs(root, null, null).count;
    let leftCount = largestBSTSubtree(root.left);
    let rightCount = largestBSTSubtree(root.right);

    return Math.max(rootCount, leftCount, rightCount);
};

//return count
var dfs = function(node, min, max) {
    if(!node) {
        //return count + valid state
        return {count: 0, isValid: true};
    }

    if (min && node.val <= min || max && node.val >= max) {
        return {count: 0, isValid: false};
    }

    //validate binary searh tree return 0 if invalid

    let left = dfs(node.left, min, node.val);
    let right = dfs(node.right, node.val, max);
        
    if (left.isValid && right.isValid) {
        return {count: 1 + left.count + right.count, isValid: true};
    }

    return {count: 0, isValid: false};
}