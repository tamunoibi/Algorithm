/**
 * Question: https://leetcode.com/problems/binary-tree-paths/description/
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 * A leaf is a node with no children.
 */


const binaryTreePaths = function(root) {
     let ans = [];

    let dfs = (node, curr) => {
        if(!node) {
            return
        }

        if (!node.left && !node.right) {
            // curr += node.val;
        curr = `${curr}${node.val}`;
            ans.push(curr);
            return;
        }

        // curr += node.val + "->";
        curr = `${curr}${node.val}->`;

        dfs(node.left, curr); 
        dfs(node.right, curr);
    }
   dfs(root, "");

    return ans;      
};
const binaryTreePathsComment = function(root) {
/**
 * What is a root to leaf path?
      1
    /   \
   2      3
     \
      5
 * A leaf is a node with no children. That is it has no descendants on the left nor on the right.
 * The above  tree has two leaf nodew 3 and 5.
 * The path from the root to 3 is:
 *    1  =>   3
 * The path from the root to 5 is:
 *    1  =>   2   =>    5
 * 
 * 

   

    /* 
        1 -> 2 ->5 -> ""
          1 ->2 -> 5

          curr => ""

          curr => 1 ->

          N -> L
          -R

          1 node is a subtree

          trees -> branches -> trees -> branches

          folder 
            - 
            files - leafs
            folders - trees

            1 -> 2 -> 5
            
            dfs(1, "")
                dfs(2, "1->")
                    dfs(null, "1->2->")
                    dfs(5, "1->2->")
                        dfs(null, "1->2->5")
                        dfs(null, "1->2->5")
                dfs(3, "1->")
                    1->2->
                        dfs(null, "1->3")
                        dfs(null, "1->3")
    */
   // Answer array to store the root to leaf paths
    let ans = [];

    // dfs takes:
    //   a. the current node we are working on 
    //   b. and the string we are forming we called it curr
    let dfs = (node, curr) => {
        //base 
        // The base case if there is no node just return and don't do anything.
        if(!node) {
            return
        }
        /**
         * we check if it is a leaf node.
         * What is a leaf?
         * A leaf node is a node that does not have any descendant tree to the left NOR a descendant to the right 
         * that is a tree with no children.
         * Example
         *            1
                    /   \
                   2      3
                  /\     /
                 9  8    5

           The leafs are 3, 9, 8, 5. 
           
           We check if the current node is a leaf, the need for this check is because when we are at leafs
           1. we do not want to add the equal to dash this is so that the 
              for example the path to 5 ought to be: 
            `1 => 3 => 5` 
            if we don't check to not add the equal to dash since it is a leaf node and would not have any items infront it would be:
            `1 => 3 => 5 =>`

           2. we want to push the leaf path to the answer array
           
         */
        if (!node.left && !node.right) {
            // Concatenate the current item. Remember to NOT add the front dash since this is a leaf node
            /**
             * Example:
             * curr     = '1=>2=>'
             * node.val = 9
             *  
             * Solution:
             * after the operation
             * curr = '1=>2=>9'
             */
             curr = `${curr}${node.val}`;
            // curr += node.val;

            // We push the path string to the answer array. It is only a leaf node that we push path to the answer
            // because it is only a leaf node that we are to return the paths
            ans.push(curr);
            return;
        }
        // Concatenate the current node to the answer string. Remember to add the front dash
        /**
         * Example 1:
         * curr     = ''
         * node.val = 1
         * 
         * Solution:
         * after the operation
         * curr = '1=>'
         * 
         * Example 2:
         * curr     = ' 1'
         * node.val = 2
         *  
         * Solution:
         * after the operation
         * curr = '1=>2=>'
         */
        // curr += node.val + "->";
        curr = `${curr}${node.val}->`;


        dfs(node.left, curr); 
        dfs(node.right, curr);
    };

    dfs(root, "");

    // return the answer 
    return ans;    
};