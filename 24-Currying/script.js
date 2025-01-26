// currying is used if there are multiple sources of data and they are async, which have to be executed sequentially
// we have multiple closures

function add(a, b, c) {
    return a + b + c;
}

// currying is 
function addCurry(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// using es6 fun // modern way

const addCurryES6 = (a) => (b) => (c) => {
    console.log("doing addition here")
    return a + b + c;
}

console.log("normal function", add(10, 23, 43))

console.log("currying", addCurry(10)(20)(30))

console.log("addCurryES6", addCurryES6(10)(20)(39))


// practical usage of email application

const sendAutoEmail = (to) => (subject) => (body) => {
    console.log("Sending message to: ",to ," subject: ",subject, " body: ", body )
}

const step1Fn = sendAutoEmail('kavya@gmail.com')
const step2Fn = step1Fn("THis is subject")

step2Fn("this is the final bodyyy")