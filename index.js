// calling function from another function body
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const apple_pieces = cutFruitPieces(apples);
    const orange_pieces = cutFruitPieces(oranges);
    const juice = `Juice with ${apple_pieces} apple pieces and ${orange_pieces} orange pieces`;

    return juice;
}

const juice = fruitProcessor(40, 4);
console.log(juice);