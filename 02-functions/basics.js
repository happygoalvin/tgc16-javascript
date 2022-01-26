// assume that we are creating a function
// that calculates distance given speed and time
function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
}

function calculateFuelRequired(distance) {
    //assume 1km costs 0.5 litres of fuel
    return distance * 0.5;
}

let distance = calculateDistance(10,20);
console.log("Distance Travelled =", distance);
console.log("Fuel Needed =", calculateFuelRequired(distance))

