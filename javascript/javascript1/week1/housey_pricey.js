const width = parseInt(prompt('Enter width of the property'));
const dept = parseInt(prompt('Enter depth of the property'));
const height = parseInt(prompt('Enter height of the property'));
const gardenSizeInM2 = parseInt(prompt('Enter size of garden of the property'));
const price = parseInt(prompt('Enter your house price'));


function housey_pricy () {
    const volumeInMeters = width * dept * height;
    let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
    // dont need to pass in comparison operator because if user fill in is equal to truthy value
    // falsy equal "empty string" 0, undefined, Nan, Null 
    if (width && dept && height && gardenSizeInM2 && price) {  
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

housey_pricy(width, dept, height, gardenSizeInM2, price); 