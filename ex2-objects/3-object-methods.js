/*
let example = {
    foo: 'bar',
    sum: function(a, b){
        return(a + b);
    },
    minus: function(a, b){
        return(a - b);
    },
};

console.log(example.sum(3, 4));
console.log(example.minus(3, 4));
*/
/*
function AnotherAnimal(type)
{
    this.type = type;
    this.printWhoAmI = function(){
        console.log(this.type);
    }
}

let dog = new AnotherAnimal('Dog');
let bird = new AnotherAnimal('Bird');

dog.printWhoAmI();
bird.printWhoAmI();
*/

/*************** EXERCISE ****************/
function Car(brand, registration)
{
    this.brand = brand;
    this.registration = registration;
    this.speed = 0;

    this.increaseSpeed = function(){
        this.speed += 5;
    }

    this.displaySpeed = function(){
        console.log(this.brand + " current speed is: " + this.speed);
    }
}

let audi = new Car('Audi', 'ABC-123');
let mercedes = new Car('Mercedes', 'JKL-789');
let ford = new Car('Ford', 'HYK-546');

audi.increaseSpeed();
audi.displaySpeed();
mercedes.displaySpeed();
ford.increaseSpeed();
ford.displaySpeed();