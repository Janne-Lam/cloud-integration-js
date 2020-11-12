class Car
{
    constructor(brand, registration)
    {
        this.brand = brand;
        this.registration = registration;
    }

    increaseSpeed(){
        this.speed += 5;
    }

    displaySpeed(){
        console.log(this.brand + " current speed is: " + this.speed);
    }
}

class RaceCar extends Car{
    constructor(type, brand, registation){
        super(brand, registation);
        this.type = type;
    }

    makeNoise(){
        console.log('brrum brrum');
    }

    increaseSpeed(){
        this.speed += 10;
    }
}

let formula = new RaceCar('F1', 'Ferrari', 'F-1');
formula.makeNoise();
formula.increaseSpeed();
formula.displaySpeed();