/*
function Animal(type, speed, isCute)
{
    this.type = type;
    this.speed = speed;
    this.isCute = isCute;
}

let alligator = new Animal('alligator', 3, false);
let dog = new Animal('dog', 8, true);

console.log(alligator);
console.log(dog);
*/

/************ EXERCISE *************/

function Car(manufactorer, model, type)
{
    this.manufactorer = manufactorer;
    this.model = model;
    this.type = type;
}

let mercedes = new Car('Mercedes Benz', 'S', 'Sedan');
let audi = new Car('Audi', 'A4', 'Estate');


for(let prop in audi){
    console.log(audi[prop]);
}