function fibanochi(number) {
    let first = 0;
    let second = 1;
    let temp = first + second;
    for(let i = 1; i < number; i+=temp ) {
       temp = first + second;
         first = second;
         second = temp;
       console.log(i);
    } 
}
