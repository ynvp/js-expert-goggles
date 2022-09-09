const pradeep = {
    firstName: 'Pradeep',
    lastName: 'Yendluri',
    birthYear: 1999,
    job: 'tester',
    friends: ['Naga', 'Vara', "Yendluri"],
    hasDriversLicense: true,

    //method
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2039 - this.birthYear;
        return this.age;
    },

    returnSummary: () => {
        return `${pradeep.firstName} is a ${pradeep.age} old ${pradeep.job}. and he has ${pradeep.hasDriversLicense ? 'a drivers license' : 'no drivers license'}`
    }
};

pradeep.calcAge();
console.log(pradeep.age)
console.log(pradeep.returnSummary());