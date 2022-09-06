// Array methods

const friends = ['Pradeep', 'Yendluri', "Naga"];

// inserts element at the end of array
const newLength = friends.push("Vara");

console.log(newLength);
console.log(friends);

// inserts element at the start of the array 0th index
friends.unshift("Yen");

console.log(friends);

// remove element from end of array and returns the removed element
let removedElement = friends.pop();
console.log(friends);
console.log(removedElement);


removedElement = friends.pop();

console.log(removedElement);

// remove element from the 0th index
friends.shift()
console.log(friends)

// to find index of element

let index = friends.indexOf('Pradeep');
console.log(index);

// index will be -1 if element does not exist in array
index = friends.indexOf('asdf');
console.log(index);

// to find if element exists in array
// includes uses strict equality (===)

console.log(friends.includes('Pradeep'));
console.log(friends);

// can use includes in conditionals
if (friends.includes('Yendluri')) {
    console.log(`You have a friend called Yendluri`)
}
