const inputEl = document.getElementById('inputEl'); 
const convertFrom = document.getElementById('convertFrom'); 
const convertTo = document.getElementById('convertTo'); 
const btn = document.getElementById('btn');
const displayCurrency = document.getElementById('displayCurrency');

// display option accroding to currency in rates
const createOption = async () => {
    const response = await fetch('https://open.er-api.com/v6/latest/USD')
    const data = await response.json()
    const rates = data.rates; 
    const keys = Object.keys(rates); 

    keys.forEach(options => {
        // create opt1 & opt2 to not make it overwritten each other 
        // because if we createElement only one time, the convertTo element will overwritten convertFrom.
        const opt1 = document.createElement('option'); 
        opt1.textContent = options; 
        opt1.setAttribute('value', options);
        convertFrom.appendChild(opt1); 
        
        const opt2 = document.createElement('option'); 
        opt2.textContent = options; 
        opt2.setAttribute('value', options); 
        convertTo.appendChild(opt2)
    })

    const optionOne = convertFrom.querySelectorAll('option')
        for(options of optionOne){
            if(options.value === 'EUR'){
                    options.selected = true;
            }
        }

    const optionTwo = convertTo.querySelectorAll('option')
        for(options of optionTwo){
            if(options.value === 'DKK'){
                    options.selected = true;
            }
        }
}

createOption()

const fetchFunc = async (search) => {
    
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${search}`)
            if(response.status !== 200){
               throw new Error('something went wrong'); 
            } 
                const data = await response.json()
                return data; 
    } catch(error){
        alert(`Sorry, there was a problem with the operation. ${error.message}`)
        console.log(error.message)
        return error.message; 
    }   
}

const currencyApp = async() => {
    const inputValue = inputEl.value;
    const convertToValue = convertTo.value; 
    const convertFromValue = convertFrom.value; 
    const fetchData = await fetchFunc(convertFromValue); 

    if(inputValue > 0){
    const rateSelector = fetchData.rates[convertToValue]; // because of convertToValue is a variable so we need to use braceket notation in this case. 
                const amount = rateSelector * inputValue; 
                
                displayCurrency.innerHTML = 
                    `<p>${inputValue} ${convertFromValue} =</p>
                    <h2>${amount} ${convertToValue}</h2>`;
    } else {
        alert('Please insert amount to convert')
    }
}

btn.addEventListener('click', currencyApp)