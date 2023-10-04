/**
 * You’re an engineer at a disruptive drone delivery startup and your CTO asks you to come up with an efficient algorithm that calculates the minimum amount of energy required for the company’s drone to complete its flight. You know that the drone burns 1 kWh (kilowatt-hour is an energy unit) for every mile it ascends, and it gains 1 kWh for every mile it descends. Flying sideways neither burns nor adds any energy.
Given an array route of 3D points, implement a function calcDroneMinEnergy that computes and returns the minimal amount of energy the drone would need to complete its route. Assume that the drone starts its flight at the first point in route. That is, no energy was expended to place the drone at the starting point.
For simplicity, every 3D point will be represented as an integer array whose length is 3. Also, the values at indexes 0, 1, and 2 represent the x, y and z coordinates in a 3D point, respectively.
Explain your solution and analyze its time and space complexities.
input:  route = [ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 15],
                  [10, 10,  8] ]

output: 5 # less than 5 kWh and the drone would crash before the finish
          # line. More than `5` kWh and it’d end up with excess energy

 */


function calcDroneMinEnergy(route) {
  
  const cordinates = [];
  
  for(let i =0; i< route.length; i++) {
    cordinates.push(route[i][2]);
  }
   console.log({cordinates});//  [ 10, 0, 6, 15, 8 ]
  
  const maxNum = Math.max(...cordinates);
  //console.log({maxNum, minNum }); { maxNum: 15}
  const ans = maxNum - route[0][2];
  console.log({ans})
  return ans;
  
  
}

calcDroneMinEnergy([ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 14],
                  [10, 10,  8] ]);


// - 1 kWh for mile it ascends
  // + 1 kWh for mile it descends.
  // Flying sideways neither burns nor adds any energy.

  // Assume that the drone starts its flight at the first point in route
  // no energy was expended to place the drone at the starting point

  // Output: minimal amount of energy the drone would need to complete its route

// x: for left: 0 and right: 0
// y: for back: 0 and forward 0
// z: for up -1 and down +1 
/**
start = 10
hight = 14 
hight - start
14 - 10 = 4;

[10, 2]
distance = 8
fuel = +8

[2, 6]
distance = 4
fuel = (+8-4) = 4

[6, 14]
distance = 8
fuel = (+4-8) =  -4


[14, 8]
distance = 6

fuel = (-4+6) =  2



z = [10, 2, 6, 14, 8]

z = [10, 0, 6, 15, 8]


           [x,   y,  z] 
 route = [ [0,   2, 10],
           [3,   5,  0],
           [9,  20,  6],
           [10, 12, 15],
           [10, 10,  8] ]


           [x,   y,  z] 
 route = [ [*,   0,  0],
           [0,   0,  0],
           [0,   0,  0],
           [0,   0,  0],
           [0,   0,  0],
          
          
          
Ask you peer to think of the net impact on the energy stored in the drone each time the drone crosses the starting altitude - either from above or from below. In the end, most energy gains and losses cancel each out due to these crosses. That means that for the solution only two points in route matter. One such point is clearly the starting point. Can you think of the other point that matters?
*/


