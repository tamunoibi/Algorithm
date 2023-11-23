/**
 * One common misconception is that this solutions just come to some people naturally
 * it does not. 
 * In other to understand the solution you have to have worked on a similar 
 * problem before. The solution is not intuitive. When you see someone working at the 
 * solution very casually and explaining them like childs play you tend to gloss over 
 * the years of hard work it took to get to that level of mastery. 
 * That is why when starting out especially if you lack a maths background you must write out the solutions.
 * Especially for things that like backtracking, formular relating to 
 * There are cetain pillars that are just assumed you understand before the solution:
 * 1. How to calculate arrival time: https://www.youtube.com/watch?v=EGqpLug-sDk&t=60s&ab_channel=FuseSchool-GlobalEducation
 * 2. How to loop backwards
 * 3. How to sort
 * 4.
 * 5. 
 *
 *
 */

function carFleet(target, position, speed) {
    const n = position.length;
    const cars = [];
    if(n < 2) {
        return n;
    }
    for (let i = 0; i < n; i++) {
        const arriveTme = (target - position[i]) / speed[i];
        cars.push([position[i], arriveTme]);

    }
    // sorting a 2d array in ascending order
    // example: [[1, ]]
    cars.sort((a, b) => a[0]-b[0]);

    let res = 0;
     for(let j = n - 1; j > 0; j--) {
        if (cars[j][1] < cars[j - 1][1]) {
            res++;
        } else {
            cars[j - 1][1] = cars[j][1];
        }
    }
    return res + 1;
}

function carFleet(target, position, speed) {
     const n = position.length;
    const cars = [];
    if(n < 2) {
        return n;
    }
    for (let i = 0; i < n; i++) {
        const arriveTme = (target - position[i]) / speed[i];
        cars.push([position[i], arriveTme]);

    }
    // sorting a 2d array in ascending order
    // example: [[1, ]]
    cars.sort((a, b) => a[0]-b[0]);

    let res = 0;
     for(let j = n - 1; j > 0; j--) {
        if (cars[j][1] < cars[j - 1][1]) {
            res++;
        } else {
            cars[j - 1][1] = cars[j][1];
        }
    }
    return res + 1;
}