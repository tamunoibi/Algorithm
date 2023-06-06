function maxDepthStackDfsExperiment(root) {
  if (!root) {
    return 0;
  }
  const stack = [[root, 1]];
  let level = 1;

  while (stack.length > 0) {
    const ele = stack.pop();
    let [curr, depth] = ele;
    //   console.log({ itemA: curr.val });

    if (curr.left || curr.right) {
      console.log({ item: curr.val });
      depth++;
      level = Math.max(level, depth);
    }

    if (curr.right) {
      stack.push([curr.right, depth]);
    }
    if (curr.left) {
      stack.push([curr.left, depth]);
    }
    /** Question:  why does this fail [3,9,20,null,null,15,7]
     * expected: 3
     * output: 5
            3
          /   \
         9     20
       /   \  /   \
      2    4 15    7

             [[3: depth:1]];   level = 1;
             loop:
             3:
               [20:depth:2, 9:depth:2]; level = 2;
             9:
              [20:depth:2, 4:depth:3,2:depth:3]; level = 3;
             2:
              [20:depth:2, 4:depth:3]; level = 3; (2 has no children so we don't alter its depth)
             4:
              [20:depth:2];  level = 3;  (4 has no children so we don't alter its depth)
             20:
              [7:depth:3, 15:depth:3]; level = 3;
             15:
              [7:depth:3]; level = 3; depth = 3; (15 has no children so we don't alter its depth)
             7:
              []; level = 3; depth = 3; (7 has no children so we don't alter its depth)
     */
  }
  console.log({ level });
  return level;
}

const root = {
  val: 3,
  left: {
    val: 9,
    // left: null,
    // right: null,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
maxDepthStackDfsExperiment(root);
