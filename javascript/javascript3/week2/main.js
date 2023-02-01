const convertFrom = document.getElementById("convert-from");
const convertTo = document.getElementById("convert-to");
const convertBtn = document.getElementById("convert-btn");

const createOption = () => {
  fetch(`https://open.er-api.com/v6/latest/USD`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      const rates = data.rates;
      const keys = Object.keys(rates);
      createOptions(keys);
    })
    .catch((error) => {
      alert(`Sorry, there was a problem with the operation.`);
      console.log(error.message);
      return error.message;
    });
};

createOption();

const createOptions = (keys) => {
  keys.forEach((options) => {
    // create opt1 & opt2 to not make it overwritten each other
    // because if we createElement only one time, the convertTo element will overwritten convertFrom.
    const opt1 = document.createElement("option");
    opt1.textContent = options;
    opt1.setAttribute("value", options);
    convertFrom.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.textContent = options;
    opt2.setAttribute("value", options);
    convertTo.appendChild(opt2);
  });

  const optionOne = convertFrom.querySelectorAll("option");
  for (options of optionOne) {
    if (options.value === "EUR") {
      options.selected = true;
    }
  }

  const optionTwo = convertTo.querySelectorAll("option");
  for (options of optionTwo) {
    if (options.value === "DKK") {
      options.selected = true;
    }
  }
};

const fetchFunc = async (search) => {
  return fetch(`https://open.er-api.com/v6/latest/${search}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      alert(`Sorry, there was a problem with the operation. ${error.message}`);
      console.log(error.message);
      return error.message;
    });
};

const currencyApp = async () => {
  const amountInput = document.getElementById("amount-input");
  const amountValue = amountInput.value;
  const convertToValue = convertTo.value;
  const convertFromValue = convertFrom.value;
  const fetchData = await fetchFunc(convertFromValue);
  const displayCurrency = document.getElementById("display-currency");

  if (!isNaN(amountValue)) {
    if (amountValue > 0) {
      const rateSelector = fetchData.rates[convertToValue]; // because of convertToValue is a variable so we need to use braceket notation in this case.
      const amount = rateSelector * amountValue;
      displayCurrency.innerHTML = 
      `<p>${parseInt(amountValue).toLocaleString("en-US")} ${convertFromValue}</p>
       <h2>${amount.toLocaleString("en-US")} ${convertToValue}</h2>`;
    } else {
      alert("Please insert amount to convert");
    }
  } else {
    alert("This input can only contain numbers");
  }
};

convertBtn.addEventListener("click", currencyApp);