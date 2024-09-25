if(true) {
    var x = 30;
    console.log("var inside block ", x);
    x = "ABC"
    console.log("var inside block -- updated value---", x); // values can be assiged to any data type
}

console.log("var outside block ", x); // scope of var is global

console.log("new var Value", newVar)
/*
above line prints undefined as it memory gets assigned to newVar
but value will be assigned as undefined
// same with let and const as well
*/
var newVar = 25;


if(true) {
    let y = 40;
    console.log("let inside block ", y);
    y = "ABC"
    console.log("var inside block -- updated value---", y); // values can be assiged to any data type
}

console.log("let outside block ", y); // scope of let is local // throws error



if(true) {
    const z = 40;
    console.log("let inside block ", z);
    //below line throws error
    z = "ABC"
    console.log("var inside block -- updated value---", z); // values cannot be assiged to any data type
    const p = 31;
}

console.log("let outside block ", p); // scope of const is local // throws error
