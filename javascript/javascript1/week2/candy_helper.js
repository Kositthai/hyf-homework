const boughtCandyPrices = [];
let amountToSpend = Math.floor(Math.random() * 100);
const candyTable = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewingGum: 0.03,
};
const candyTableKeys = Object.keys(candyTable);
const candyTableValues = Object.values(candyTable);

function addCandy(candyType, weight) {
  for (let i = 0; i < candyTableKeys.length; i++) {
    if (candyType === candyTableKeys[i]) {
      let total = weight * candyTableValues[i];
      boughtCandyPrices.push(total);
    }
  }
}

function canBuyMoreCandy() {
  let i = -1;
  let totalPrice = 0;

  while (i < boughtCandyPrices.length - 1) {
    i++;
    totalPrice += boughtCandyPrices[i];
  }
  if (totalPrice < amountToSpend) {
    console.log(
      `You have money ${amountToSpend}kr You spent ${totalPrice.toFixed(
        0
      )}kr You can buy more, so please do!`
    );
  } else {
    console.log(
      `You have money ${amountToSpend}kr You spent ${totalPrice.toFixed(
        0
      )}kr Enough candy for you!`
    );
  }
}

addCandy("sweet", 2);
addCandy("chocolate", 2);
addCandy("toffee", 2);
addCandy("chewingGum", 2);

canBuyMoreCandy();
