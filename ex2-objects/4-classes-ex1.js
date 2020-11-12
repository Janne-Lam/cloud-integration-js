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

let banana = new Food('banana', 4);
banana.whatIsThis();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();