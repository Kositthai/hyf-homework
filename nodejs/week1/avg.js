const inputStrings = process.argv.splice(2);
const inputNumbers = inputStrings.map((number) => parseFloat(number));
const areANumbers = inputNumbers.map((number) => isNaN(number));

const sum = inputNumbers.reduce((sum, current) => sum + current, 0);
const average = (sum / inputNumbers.length).toFixed(2);

if (inputStrings.length != 0) {
  if (areANumbers.includes(true)) {
    console.log("You can only pass numbers");
  } else {
    console.log(`Average: ${average}`);
  }
} else {
  console.log("Please fill in at least two numers");
}
