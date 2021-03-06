/*
Create a function to perform shallow object copies.
Shallow copy means that only primitives of the source are copied,
but any object properties still retain their original object references.
*/

const a = {
    foo: 'bar',
    x: 4,
    y: 8,
    z: 13.5
}

/* This function should make a shallow copy/clone of the source object.
Shallow copy means that only primitives of the source are copied, but any object properties
still retain their original object references. */
function shallowCopy(source)
{
    /*let newObject = { 
        foo: source.foo,
        x: source.x,
        y: source.y,
        z: source.z
    }
    return newObject;
    */

    //let newObject = Object.assign({}, source);
    //let newObject = {...source};
    
    return newObject;
}

let copiedObject = shallowCopy(a);
copiedObject.foo = "This is not the original object";
console.log(a);
console.log(copiedObject);
console.log(a == copiedObject);