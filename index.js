let calcTip = (billValue) => {
    let tip = 0;
    if (billValue >= 50 && billValue <= 300) {
        tip = billValue * 0.15;
    } else {
        tip = billValue * .2;
    }
    return tip;
}

bills = [125, 555, 44];
tips = [];

total = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
}
console.log(total)
console.log(tips);