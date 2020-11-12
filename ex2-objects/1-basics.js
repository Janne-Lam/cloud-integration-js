/* 
let car = new Object();
car.manufacturer = "Mercedes Benz";
car.model = "E";
car.type = "Sedan";

let anotherCar = {
    manufacturer: "Audi",
    model: "A4",
    type: "Estate"
};

console.log(anotherCar.type);
console.log(car.type);

for(let prop in car){
    console.log(prop);
    console.log(car[prop]);
}
*/

/******** EXERCISE ********/
let vehicle = {
    type: 'truck',
    tireCount: 5,
    capasity: 5
};

for(let prop in vehicle){
    console.log(prop + ' - ' + vehicle[prop]);
}