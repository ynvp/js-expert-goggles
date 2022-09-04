let calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

dolphin_average = calcAverage(44, 23, 71);
koala_average = calcAverage(65, 54, 49);
console.log(dolphin_average, koala_average);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🥇(${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🎉(${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team won the match');
    }
}

checkWinner(dolphin_average, koala_average);
checkWinner(1000, 11100);
