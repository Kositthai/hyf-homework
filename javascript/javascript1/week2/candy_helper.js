const boughtCandyPrices = [];
const amountToSpend = Math.floor(Math.random() * 100);
const candies = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    chewingGum: 0.03,
};

function addCandy(selectCandyType, weight) {
    for(candyType in candies){
        if(selectCandyType === candyType){
            const total = weight * candies[candyType]
            boughtCandyPrices.push(total)
        }
    }
}

function canBuyMoreCandy(boughtCandyPrices) {
    const totalPrice = boughtCandyPrices.reduce(function(accumulator, currentValue) {
          return accumulator + currentValue
    }, 0)

    if (totalPrice < amountToSpend) {
        console.log(`You have money ${amountToSpend}kr You spent ${totalPrice.toFixed(2)} kr You can buy more candy!`);
    } else {
        console.log(`You have money ${amountToSpend}kr You spent ${totalPrice.toFixed(2)}kr Enough candy for you!`);
    }
}

addCandy("sweet", 3);
addCandy("chocolate", 2);

canBuyMoreCandy(boughtCandyPrices);