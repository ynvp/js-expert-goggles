const pradeep = {
    firstName: 'Pradeep',
    lastName: 'Yendluri',
    age: 24,
    job: 'tester',
    friends: ['Naga', 'Vara', "Yendluri"]
};

console.log(pradeep.lastName);
console.log(pradeep['lastName']);

const nameKey = 'Name';

console.log(pradeep['first' + nameKey]);

// compute property name then we can use [] notation
// else . notation is better with clean implementation

console.log(`${pradeep.firstName} has ${pradeep.friends.length} friends, and his best friend is called ${pradeep.friends[0]}`)