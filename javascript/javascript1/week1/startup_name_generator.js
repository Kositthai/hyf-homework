let firstWords = ['IT', 'Connect', 'Network', 'Boot', 'Benefit'];
let secondWords = ['Corporation', 'Company', 'Startup', 'Business', 'Firm'];
// firstWords.length is equal 4 so it will matching with element that you have which is total 4 index
// if you * with number so in case if you have less element so you will get undefined result 
let randomNumber = Math.floor(Math.random() * firstWords.length) ; 
let startupName = (`${firstWords[randomNumber]} ${secondWords[randomNumber]}`); // square bracket to access to the value of array and randomNumber given random of array that we want to access // 
console.log(startupName);
