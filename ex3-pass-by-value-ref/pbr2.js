let a = {
    foo: 1,
    bar: 2
    }

let b = {
    foo: 5,
    bar: 6
}

console.log(a.foo + b.bar); // 7

function selfSum(p){
    //p.foo is 3, replacing a.foo with 3
    p.foo = p.foo + p.bar;
    return p;
}

let result = selfSum(a);

console.log(a.foo + b.bar); // 9
console.log(result);    // 
console.log(a);
console.log(result == a);