class Food{
    constructor(type, count){
        this.type = type;
        this.count = count;
    }
    whatIsThis(){
        console.log(this.type);
    }
    eatOne(){
        this.count --;
        if(this.count < 0){
            console.log('Sorry, no more ' + this.type + 's remaining!');
        }
        else{
            console.log('Slurp! One ' + this.type + ' eaten. ' + 
            (this.count) + ' remaining');
        }
    }
}

class Refrigerator{

    constructor(){
        this.store = [];
    }

    putfood(food){
        this.store.push(food);
    }

    getAndEatOne(foodName){
        let foundFoodIndex = this.store.findIndex(function(element, index, array){
            if(element.type === foodName){
                return true;
            }
            else{
                return false;
            }
        })
        if(foundFoodIndex !== -1){
            this.store[foundFoodIndex].eatOne();
            if(this.store[foundFoodIndex].count === 0){
                this.store.splice(foundFoodIndex, 1);
            }
        }
        else{
            console.log('Sorry, no more ' + foodName + 's in this refridgerator!');
        }
    }

    getContents(){
        console.log('-----------');
        for(let i = 0; i < this.store.length; i++){
            console.log('| ' + this.store[i].type + ' ' + this.store[i].count);
        }
        console.log('-----------');
    }
}

let r = new Refrigerator();
let apple = new Food('Apple', 2);
let banana = new Food('Banana', 3);

r.putfood(apple);
r.putfood(banana);
r.getContents();
r.getAndEatOne('Banana');
r.getAndEatOne('Banana');
r.getAndEatOne('Apple');
r.getAndEatOne('Apple');
r.getAndEatOne('Apple');
r.getContents();