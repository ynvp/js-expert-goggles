let calcTip = (bill) => {
    console.log(bill);
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

for (let bill in bills) {
    let tip = calcTip(bills[bill]);
    console.log(tip);
    tips.push(tip);
    totals.push(bills[bill] + tip);
}

console.log(tips, totals);

let calcAverage = (arr) => {
    let sum = 0;
    for (let i in arr) {
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(calcAverage(tips));

const calcAge = (birthYear) => birthYear - 30;

console.log("hello1");
