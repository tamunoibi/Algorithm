

//CORRECT but I do not understand the question nor the solution.
// but there is some silly bit about number theory and the way to know when a number would be repeated
function cycle(n) 
{
    if (n % 2 == 0 || n % 5 == 0){return -1;}
    var res = 10 % n, c = 1;
    while (res != 1) 
    {
        res = res * 10 % n; 
        c++;
    }
    return c;
}

// function cycle(n) {

//    const divider =  1/n;
//    const decimalNum = divider.toString().split('.')[1];
//    const value = decimalNum.charAt(0);

//    const answer = value == 0 ?  -1 :  decimalNum.length;
//    console.log(value);
//    return answer;
 
// }
// cycle(5);
