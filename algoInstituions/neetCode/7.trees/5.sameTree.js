//sample input
const p = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 1,
    left: null,
    right: null,
  },
};

const q = {
  val: 1,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};

const sameTree = (p, q) => {
   /**
    * 1. add  root
    * 2. remove first element with shift
    * 3. add children
    */
   

   const pQueue = [p];
   const qQueue = [q];

   while (pQueue.length || qQueue.length) {
      if (!pQueue.length || !qQueue.length) {
        return false;
      }
     const currP = pQueue.shift();
     const currQ = qQueue.shift();

     if (currP.val !== currQ.val) {
       return false;
     }
     if (pQueue.left) {
       pQueue.push(currP.left);
     }
     if (pQueue.right) {
       pQueue.push(currP.right);
     }
     if (qQueue.left) {
       qQueue.push(currP.left);
     }
     if (qQueue.right) {
       qQueue.push(currP.right);
     }
   }
return true;
}