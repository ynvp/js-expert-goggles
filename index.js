//functions in js

//params
//function declaration
function calcAge1(birthYear) {
    return (2037 - birthYear);
}

//args
const age1 = calcAge1(1999);

console.log(age1);


//function without a name
//after creation assign it to a variable
// we can call variable with args to invoke the function

// function expression

// function is also considered value in js
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1999)
console.log(age2)


//diff
// declarations we call before even we define in the code
// fun expressions, we can't call before we declare them

