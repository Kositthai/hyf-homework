// Take values from argument
const inputString = process.argv.splice(2);
// Using the value that received calcurate average of number by reduce method and devide the length of numbers
const average = inputString
    .map((string) => parseFloat(string))
    .reduce((sum, current) => sum + current, 0) / inputString.length;

// Check if there any values passing through the argument
// and check if the values that we received is a number?  ** isNaN method will return true is values is not-a-number (undefined, Nan = true)
// otherwise log(average)
if (inputString.length != 0) {
  if (isNaN(average)) {
    console.log("Please fill in only numbers...");
  } else {
    console.log(average.toFixed(2));
  }
} else {
  console.log("Please filll in at least two numbers...");
}
