// arrow functions
const calcAge = (birthYear) => 2037 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const ageNow = 2037 - birthYear;
    const retirement = 65;
    const yearsLeft = retirement - ageNow;
    // return yearsLeft;
    return `${firstName} retires in ${yearsLeft} years`
}

console.log(yearsUntilRetirement(2020, 'Pradeep'));