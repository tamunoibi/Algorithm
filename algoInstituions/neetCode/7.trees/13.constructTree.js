function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  const root = { val: preorder[0] };
  const mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid+1), preorder.slice(0, mid+1));
  root.right = buildTree(preorder.slice(), preorder.slice(1, mid+1));
  return root;
}

function buildTreeComment(preorder, inorder) {
  //  if either of the preorder or the inorder array is empty
  // eg: preorder = []
  // that means no tree can be consntructed return null
  if (!preorder.length || !inorder.length) {
    return null;
  }

  // we already know that the very first item of the preorder array is the value of the first binary tree
  // so constrict the root, and set the first item as the first item of the preover array
  const root = TeeNode(preorder[0]);

  // we want to find that first item is the inorder array
  // this is because all items to the left of that item(the first preorder item) is on the left of the tree
  const mid = inorder.indexOf(preorder[0]);


  // The items on the left side are the items of the inorder are the 
  root.left  = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid+1));
  root.right = buildTree(preorder.slice(), inorder.slice(1, mid+1));
  return root;
}
