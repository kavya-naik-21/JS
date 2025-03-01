console.log('Higher Order Functions and callbacks ')

function higherOrder(a, b, callback) {
    let res = a + b;
    callback(res);
}

higherOrder(10, 20, (val) => console.log(val))


function showResult(val) {
    console.log(val);
}

higherOrder(10, 30, showResult)


// we can also return functions


function f2(a, b) {
    let res = a + b;

    return function() {
        console.log(res);
    }
}

let x = f2(13, 23)

x()