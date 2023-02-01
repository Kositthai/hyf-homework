console.log("Script loaded");

const products = getAvailableProducts();

const searchProduct = document.getElementById("searchProduct");
const searchPrice = document.getElementById("searchPrice");
const searchItem = document.getElementById("searchItem");
const display = document.getElementById("display");
const sorting = document.getElementById("sorting");

searchProduct.addEventListener("input", filters);
searchPrice.addEventListener("input", filters);
sorting.addEventListener("click", filters);

// The function will filter element that match conditions and after we got thoese elements 
// we loop over these elements and print its name, price, rating 
function filters() {
    
    display.innerHTML = '';
    let filterdProduct = [];
    const captureSearch = searchProduct.value.toLowerCase();
    const maximumPrice = searchPrice.value.toLowerCase();  
    const isChoose = sorting.value; // get value from select

  if (captureSearch !== "") {
        filterdProduct = products.filter((element) => element.name.toLowerCase().includes(captureSearch));
  }
  if (maximumPrice !== "") {
        filterdProduct = products.filter((element) => element.price < maximumPrice);
  }
  if (isChoose === "lowest") {
        filterdProduct.sort((a, b) => a.price - b.price);
  } 
    else if (isChoose === "highest") {
        filterdProduct.sort((a, b) => b.price - a.price);
  }

  filterdProduct.forEach((element) => {
    display.innerHTML = `${display.innerHTML} 
                    <h3>${element.name}</h3>
                    <p>Price: ${element.price}</p>
                    <p>Rating: ${element.rating}</p>`;
  });
}