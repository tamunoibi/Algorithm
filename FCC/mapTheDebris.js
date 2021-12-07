function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 636.4447;
    const result = [];

    // Using the reduce
    // return arr.reduce(function (acc, obj) {
    //     const orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + obj.avgAlt,3)/GM));
    //     acc.push({name: obj.name, orbitalPeriod: orbPeriod});
    //     console.log({acc, obj});
    //     return acc;
    // }, []);

    // Using forEach();
    arr.forEach(obj => {
        const orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + obj.avgAlt,3)/GM));
        obj.orbitalPeriod = orbPeriod;
        delete obj.avgAlt;
    });
    return arr;
};
// orbitalPeriod([{name: 'sputnik', avgAlt: 35873.5553}]);
orbitalPeriod([{name: 'iss', avgAlt: 413.6}, {name: 'hubble', avgAlt: 556.7}, {name: 'moon', avgAlt: 378632.553}]
);