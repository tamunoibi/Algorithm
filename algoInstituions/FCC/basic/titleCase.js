function titleCase(str) {
  // we split it so that we can go through each item of the string
  const splitStr = str.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    /***
     * we get the very first item and convert it to uppercase.
     *
     * an alternatvie way to do this is:
     *  splitStr[i][1].toUpperCase()
     *
     * example
     * splitStr[i] = 'little';
     *
     * we convert the first letter to capital
     * left = 'L'
     *  */
    const left = splitStr[i].charAt(0).toUpperCase();
    /***
     * we get the items from the first item to that last item. and convert them to capital
     *
     *
     * example
     * splitStr[i] = 'little';
     *
     * we convert the letters  to small letters
     * right = 'ittle'
     *  */
    const right = splitStr[i].slice(1).toLowerCase();
    /***
     * we combine the left side and the right side and reasign the values
     *
     * example
     * splitStr[i] = 'little';
     * left = 'L'
     * right = 'ittle'
     *
     * splitStr[i] = 'Little';
     */
    splitStr[i] = `${left}${right}`;
  }
  /***
   * we join the values from an array back to a string
   *
   * example
   * splitStr[i] = ['Me' 'Little'];
   *
   * we join it back to
   * splitStr[i] = 'Me Little';
   */
  return splitStr.join(" ");
}

titleCase("I'm a little tea pot");
