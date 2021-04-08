var carMakers = ['ford', 'toyota', 'chevy'];
var dates = [new Date(), new Date()];
var carsByMake = [];
var cars = carMakers[0];
var myCar = carMakers.pop();
// carMakers.push(100)
carMakers.map(function (cars) {
    return cars.toUpperCase();
});
console.log(carMakers);
