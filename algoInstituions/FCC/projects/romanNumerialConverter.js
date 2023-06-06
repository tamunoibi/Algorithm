 //Solution:https://www.youtube.com/watch?v=HASDDMBGIcQ
 function convertToRoman(num) {
   const numberUnits = {
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1,
   };
   let answer = "";
   for (let key in numberUnits) {
    /**
     * We check if num >= units
     * example num = 30
     * first unit is 1,000 we check if 30>=1000, no 30 is less than 1,000 so we skip this. we are going to remove the 1000 from 30 that is why it is important for the 1000 to  be bigger than the 30.
     * You might say why don't we remove the 30 from the 1000 if we did that then we have 970 of what relevance is that? however if we removed 10(the roman part) from 30(the arabic) part we now know that we have converted a small part(of the arabic part) to roman numeral. remaining 20(arabic)part to be converted.
     * This is the key issue in understanding this. If you have 50 in arabic we want to convert it to roman numerals. we look for the biggest roman possible numeral. In this case it is L. Note we start looking from the biggest Roman numerals.
     */
     while (num >= numberUnits[key]) {
       /**
         Example given the number 36
         we remove 10 from num so becomes 26 then we add X to answer answer becomes 'X'
         we remove 10 from num so becomes 16 then we add X to answer answer becomes 'XX'
         we remove 10 from num so becomes 6 then we add X to answer, answer becomes 'XXX'
         we remove 5 from num so becomes 1 then we add V to answer, answer becomes 'XXXV'
         we remove 1 from num so becomes 0 then we add I to answer, answer becomes 'XXXVI'
         */
       answer += key;
       // answer is a string. += can be used to sum numbers eg. 2 += 2 would be 4. But in this case it is being used to concatenate string eg. '' += 'I' would become 'I'
       num -= numberUnits[key];
       // we have to reduce this roman numeral from the answer
     }
   }
   return answer;
 }

 console.log(convertToRoman(36));
