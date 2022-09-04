// Arrays

const friends = ["Pradeep", "Yendluri", "Naga"];
console.log(friends);

const years = new Array(1991, 1994, 1200);
console.log(years);

const classes = new Array('B123', 'B213', 23)
console.log(classes);

console.log(friends.length);
console.log(years.length)
console.log(classes.length);

//last element
console.log(friends[friends.length - 1])

console.log(friends[0]);
console.log(classes[4]);

// can mutate element of an array with diff element
// cannot change entire array

friends[2] = 'Vara';
console.log(friends)

const firstName = 'Yendluri'
const pradeep = [firstName, 'Naga', "Vara", 2037 - 1991, 'student', friends];

console.log(pradeep.length)
