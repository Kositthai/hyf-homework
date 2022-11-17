console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const lists = document.querySelector("#lists");

products.forEach(product => {

    const productList = document.createElement('li'); 
    productList.innerHTML = `<h3>${product.name}</h3> <p>Price: ${product.price}</p> <p>Rating: ${product.rating}</p>`;
    
    lists.append(productList)
   
});







































































