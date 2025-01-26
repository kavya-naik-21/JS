function mainFun(val) {
    console.log('this is inside a main Func i.e, is outside of closure function', val);

    return function () {
        console.log('this is a closure function', val)
    }
}

const fn = mainFun(23) // the closure function is returned

console.log(fn) 

fn() // closure function is executed but it has access to the data of mainFun