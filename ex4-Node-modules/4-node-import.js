const example = require("./sources/4-node-export.js");
console.log(example);

console.log('Testing sum');
console.log(example.sum(5, 2));

console.log('Testing minus');
console.log(example.minus(5, 2));

console.log('Testing multiply');
console.log(example.multiply(6, 2));

console.log('Testing content');
console.log(example.settings);