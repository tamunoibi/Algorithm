function permAlone(str) {
  var arr = str.split("");
  var result = 0;

  function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
  }

  function generate(n) {
      var regex = /([a-z]\1+)/;
      if (n === 1 && !regex.test(arr.join(''))) {
          result++;
      } else {
          for (let index = 0; index != n; index++) {
              generate( n - 1);
              swap(n % 2 ? 0 : i, n - 1);
          }
      }
  }
  generate(arr.length);
  return result;
}
permAlone("aab");