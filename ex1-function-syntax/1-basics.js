function sum(a, b) {
    return a + b;
}

console.log(sum(5, 1)); //prints 6

const myName = function(name) {
    console.log(name); //prints param given in function call
}

myName('John Doe');

const anotherName = myName;
anotherName("Donald Duck"); //uses myName function to print "Donald Duck"

const printParameterType = function(p) {
    console.log(typeof p); //prints parameter type
}

printParameterType(2); //prints number
printParameterType('Hello world!'); //prints string
printParameterType(myName); //prints function 

const example = function() {
    return "Have a nice day!";
}

const anotherExample = example;
console.log(typeof anotherExample); //prints function

const yetAnotherExample = example();
console.log(typeof yetAnotherExample); //prints return type, string in example