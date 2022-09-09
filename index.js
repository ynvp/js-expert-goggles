let miller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },

    summary: function (compName, compBMI) {
        console.log(`${this.fullName}'s BMI (${this.bmi} is higher than ${compName}'s (${compBMI}))`)
    }
};

let smith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },

    summary: (compName, compBMI) => {
        console.log(`${this.fullName}'s BMI (${this.bmi}) is higher than ${compName}'s (${compBMI})`)
    }
}

smith.calcBMI();
miller.calcBMI();

if (smith.bmi > miller.bmi) {
    smith.summary(miller.fullName, miller.bmi)
} else {
    console.log('x')
    miller.summary(smith.fullName, smith.bmi)
}