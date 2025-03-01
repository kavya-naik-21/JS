/*
Function composition is the pointwise application of one function to the result of another. 
Developers do it in a manual manner every day when they nest functions:
*/

// if you want to add 2 numbers and square them then what would be the approach ?
// you can do something like square(add(3,4))
// but using compose for 2 functions, below is the implementation

function add(a, b) {
  return a + b;
}

function multiply(args) {
  return args[0] * args[1];
}

function square(val) {
  return val * val;
}

function compose2Functions(f1, f2) {
  return function (a, b) {
    return f2(f1(a, b));
  };
}

const task = compose2Functions(add, square);
console.log(task(3, 2));

// what if you want to compose multiple function

function composeMultipleFunctions(...fns) {
  return function (...value) {
    return fns.reduce((accumulator, fn) => fn(accumulator), value);
  };
}

const task2 = composeMultipleFunctions(multiply, square);
console.log(task2(2, 2));

const task3 = composeMultipleFunctions(multiply, square, (val) => {
  return val + 3;
});
console.log(task3(2, 2));

const composeMultipleFunctionsModern =
  (...fns) =>
  (...value) =>
    fns.reduce((accumulator, fn) => fn(accumulator), value);
const task4 = composeMultipleFunctionsModern(multiply, square, (val) => {
  return val + 3;
});
console.log("modern", task4(2, 2));
