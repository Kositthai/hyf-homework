const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
function removeArr(name) {
  for (i = 0; i < names.length; i++) {
    if (name === names[i]) {
       // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
       // In this case the value of indexOf of 'Ahmad' = 1 
       // names.splice(names.indexOf (1,1)); ** start from and delete 1 item 
       // if NameToRemove is changed, indexOf will also change too 
      names.splice(names.indexOf(nameToRemove), 1);
    }
  }
}
// Code done
removeArr(nameToRemove);
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

