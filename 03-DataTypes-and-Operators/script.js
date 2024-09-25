// Data Types and Operators

// Number
{
  let a = 10;
  let b = 20;

  console.log("a + b", a + b);
  console.log("a - b", a - b);
  console.log("a * b", a * b);
  console.log("a / b", a / b);
}

//String
{
  let a = "This is a String, ";
  let b = "Next String"
  console.log("a + b", a + b)
  console.log("a - b", a - b) // gives NaN - not a number

  console.log('1' + '11') // 111
  console.log('1' + 11) // 111 - converts 11 to string and concatenates
  console.log('1' * 11) // 11 - converts 1 to Number and multiplies with 11
  console.log('1' * '11') // 11 - converts both to Number and multiplies
  console.log('a' * 1) // NaN - Not a Number
}

//Boolean
{
    let flag = true;
    console.log("flag", flag)
}

// NULL
{
    let a = null
}

// undefined
{
    let b = undefined
}

// object
{
    const person = {
        firstName: "Kavya",
        lastName: "Naik",
    }

    console.log(person.firstName)
}


//typeof Operator
{
    console.log(typeof 123);
    console.log(typeof 'Kavya')
    console.log(typeof null)
    console.log(typeof false)
    console.log(typeof undefined)
    console.log(typeof (12 * 'a'))

    const a = 'a' * 12;
    console.log(typeof a)

}

