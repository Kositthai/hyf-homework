// Doubling of number
let numbers = [1, 2, 3, 4, 5, 6];
let newNumbers = [];

newNumbers = numbers
  .filter(element => element % 2 !== 0)
  .map(element => (newNumbers = element * 2));
console.log(`The double numbers are ${newNumbers}`);

// Working with movies
// I am using same sample that I have create for my own becuase the one that provided is quite big 
const movieName = [
  { title: "The three men and the pistol", year: 1980, rating: 7 },
  { title: "Chase three - The final chase", year: 1981, rating: 5 },
  { title: "Surfer", year: 1982, rating: 6 },
  { title: "Alien", year: 2005, rating: 3 },
  { title: "The Benjamin", year: 2014, rating: 8 },
  { title: "Boat", year: 1979, rating: 9 },
];

// (1)
const shortTitle = movieName.filter(element => element.title.split(" ").length <= 3);
console.log(shortTitle)

// (2)
const longTitle = movieName.filter(element => element.title.split(" ").length > 3);
console.log(longTitle)

// (3)
const movieYearMade = movieName.filter(element => element.year >= 1980 && element.year <= 1989);
console.log(movieYearMade)

// (4)
const addKeyCalledTag = movieName.map((element) => {
  if(element.rating >= 7){
      element.tag = 'Good'
  } else if (element.rating >= 4 && element.rating < 7) {
       element.tag = 'Average'
  } else {element.tag = 'Bad'}; 
})
console.log(movieName)

// (5)
const movieRateMoreThanSix = movieName.filter(element => element.rating > 6).map(element => element.rating)
console.log(movieRateMoreThanSix)

// (6)
const contain = ["surfer", "alien", "benjamin"];
let total = 0;
const countTotalMovie = movieName
  .map((element) => element.title.toLowerCase())
  .filter((element) => {
      if (contain.includes(element)) {
        total++;
      }
  });
console.log(total)

// (7)
const duplicate = movieName.filter((item) => {
const items = item.title.toLowerCase().split(' ');

let isDuplicate = false;

  const checkItems = items.forEach((element, index) => {
      if (items.indexOf(element) !== index) {
            isDuplicate = true;
        }
    });

    if (isDuplicate) return item;
});

console.log(duplicate)