// Question: https://www.chegg.com/homework-help/questions-and-answers/triangle-formed-three-points-x1-y1-b-x2-y2-c-x3-y3-non-degenerate-triangle-following-rules-q83416491
// This question is a combination of
// 1. valid triangle: https://leetcode.com/problems/valid-triangle-number/editorial/
// 2. Check if a point is within a shape;
function validTriangle(x1, y1, x2, y2, x3, y3) {
  const distanceBetweenPoints = (px, py, qx, qy) => {
    const xAxis = (qx - px) ^ 2;
    const yAxis = (qy - py) ^ 2;
    return Math.sqrt(yAxis + xAxis);
  };
  const a = distanceBetweenPoints(x1, y1, x2, y2);
  const b = distanceBetweenPoints(x1, x1, x3, y3);
  const c = distanceBetweenPoints(x2, x2, x3, y3);
  if (a + b <= c || a + c <= c || b + c <= a) {
    return 0;
  }
}



function validTriangleComment(x1, y1, x2, y2, x3, y3) {
  /**
   *  GET THE LENGTH OF EACH SIDE FROM THE CORDINATES
  Why do I need the need the length of the sides? 
  Because the question is to check whether the triangle is a valid triangle. And for a triangle to be a valid triangle the sum of any two sides(lines) must be greater than the third side(line). that a+b>=c. But right now we don't have a, b nor c. we just have cordinates
  How to get the length of each line that is the length of the sides from the cordinates: Use the distance formula
  DISTANCE FORMULA
  The distance formula is used to calculate the distance between two points
   */
  //

  // CHECK IF A TRIANGLE IS VALID:
  // How to check if the triangle is valid (that is it is a non degenerate triangle also known as not on a straight line). We use Pythagoras theory
  // a is the length of one side of the triangle. b is the length of another side of the triangle and c is the length of another side of the triangle.
  // a^2 + b^2 = c^2
  // Question: I thought pythagoros theory only applied to right angle triangle. Why are we using it here. The triangle must not necessarily be a right angle triangle. So would it fail if the triangle is not a right angle triangle.

  // to break it down:
  // c = sqroot(c^2) = sqroot(a^2 + b^2)
  //   line 1_2

  // Question: this naming convention used is confusing
  // could I have called the lines a and b. It can match the pythagoras theory
  /**
   * There are three lines that make up a triangle. and the three cordinates were given to us.
   * we calculate the first line,
   * we calculate the second line,
   * we calculate the third line,
   */

  // p is the first point. qis it second point. While x is horizontal and y is vertical
  // px is the first one horizontal
  // qx is the second on horizontal
  // px is the first one horizontal
  // qx is the second on horizontal
  const distanceBetweenPoints = (px, py, qx, qy) => {
    // Horizontal difference: difference in  the two x
    const xAxis = (qx - px) ^ 2;
    // Vertical difference: difference in  the two y
    const yAxis = (qy - py) ^ 2;
    return Math.sqrt(yAxis + xAxis);
  };
  // x1, y1, x2, y2, x3, y3;
  // x1 is the first points horizontal axis
  // y1 is the first points vertical axis
  // x2 is the second points horizontal axis
  // y2 is the second points vertical axis
  // line 1_2
  const a = distanceBetweenPoints(x1, y1, x2, y2);
  // x1 is the first points horizontal axis
  // y1 is the first points vertical axis
  // x3 is the third points horizontal axis
  // y3 is the third points vertical axis
  // line 1_3
  const b = distanceBetweenPoints(x1, x1, x3, y3);
  // line 2_3
  // x2 is the second points horizontal axis
  // y2 is the second points vertical axis
  // x3 is the third points horizontal axis
  // y3 is the  third vertical axis
  const c = distanceBetweenPoints(x2, x2, x3, y3);
  // This is checking if the triangle is valid. that is if side a+b greater or eqaul to side c
  if (a + b <= c || a + c <= c || b + c <= a) {
    return 0;
  }
  if (
    line1_2 + line1_3 <= line2_3 ||
    line1_2 + line2_3 <= line1_3 ||
    line1_3 + line2_3 <= line1_2
  ) {
    return 0;
    //if the point is within the line
  } else "a";
}
