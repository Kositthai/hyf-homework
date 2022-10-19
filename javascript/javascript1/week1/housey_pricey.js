let width = parseInt(prompt('Enter width of the property'));
let deep = parseInt(prompt('Enter depth of the property'));
let high = parseInt(prompt('Enter height of the property'));
let gardenSizeInM2 = parseInt(prompt('Enter size of garden of the property'));
let price = parseInt(prompt('Enter your house price'));
let volumeInMeters = width * deep * high;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;


function housey_pricy () {
    // dont need to pass in comparison operator because if user fill in is equal to truthy value
    // falsy equal "empty string" 0, undefined, Nan, Null 
    if (width && deep && high && gardenSizeInM2 && price) {  
        if (housePrice > price) {
            alert(`Cheap price! Your house price calculated is ${housePrice}`)
        } else {
            alert(`You are paying too much!. Your house price calculated is ${housePrice}`)
        }
    // if data is falsy do this 
    } else {
        alert('Please fill in all questions');
    }
}

housey_pricy(housePrice); 