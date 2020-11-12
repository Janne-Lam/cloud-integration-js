/*
let a = 5;
function example(param1) {
    const b = 10;
    console.log(a + b + param1);
}

example(20);    //prints 35, because 5 + 10 + 20 is 35
//console.log(b); not defined in the global scope

function greetingsToYou(name) {
    const createdAt = new Date();
    function seasonSelector(type) {
        switch (type) {
            case 'Christmas':
                console.log('Merry christmas ' + name);
                break;
            case 'New Year':
                console.log('Happy new year ' + name);
                break;
            case 'Day':
                console.log('Have a nice day ' + name);
                break;
            default:
                console.log('Use eitheer "Christmas", "New York" or "Day" as values');
        }
        console.log('this greeter was created on ' + createdAt.toISOString());
    }
    return seasonSelector; //Here the outer function returns the inner function
}

greeter = greetingsToYou("Janne");
greeter();
greeter('Christmas');
greeter('New Year');
greeter('Day');
*/

/********************** EXERCISE *********************/

const multiplier = (mp) => {
    const innermp = (multip) => {
        switch (mp) {
            case 2: return mp * multip;
            case 6: return mp * multip;
            case 15: return mp * multip;
        }
    }
    return innermp;
}



const multiplier2 = multiplier(2);
const multiplier6 = multiplier(6);
const multiplier15 = multiplier(15);

const a = multiplier2(2);
const b = multiplier2(7);
const c = multiplier2(32);

console.assert(a === 4, 'multiplier2(2) is incorrect');
console.assert(b === 14, 'multiplier2(7) is incorrect');
console.assert(c === 64, 'multiplier2(32) is incorrect');
console.log(a + ' ' + b + ' ' + c);

const d = multiplier6(2);
const e = multiplier6(7);
const f = multiplier6(32);

console.assert(d === 12, "multiplier6(2) is incorrect")
console.assert(e === 42, "multiplier6(7) is incorrect")
console.assert(f === 192, "multiplier6(32) is incorrect")
console.log(d + ' ' + e + ' ' + f);

const x = multiplier15(2);
const y = multiplier15(7);
const z = multiplier15(32);

console.assert(x === 30, "multiplier15(2) is incorrect")
console.assert(y === 105, "multiplier15(7) is incorrect")
console.assert(z === 480, "multiplier15(32) is incorrect")
console.log(x + ' ' + y + ' ' + z);