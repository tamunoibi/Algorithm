/**
 * A Balanced binary tree is a tree whose nodes
 * has a height difference of atmost 1
 * BALANCED: should return true the height difference beween node b and c is 1
     a
    /   \
   b      c
 /   \     
d      e  


 * INBALANCED: should return false the height difference beween node c and b is 2
                    a
                  /   \
                 b      c
                /   \     
               d     e    
              /   \      
             f     g   
*/

const balancedTree = (root) => {
  // not tested, saw 
  let balanced = true;
    const dfs = (node) => {
        if (!node) {
                return 0;
        }
        const left = balancedTree(node.left);
        const right = balancedTree(node.right);
        if (Math.abs(left - right) <= 1) {
                balnced = false;
        }
      return 1 + Math.max(left, right)
    }
   const count = dfs(root);
   return balanced;
};