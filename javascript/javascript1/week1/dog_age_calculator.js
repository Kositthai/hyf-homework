const dogYearOfBirth = 2020;
let dogYearFuture = 2030;
let dogYear = (dogYearFuture - dogYearOfBirth); 
let shouldShowResultInDogYears = true;


if (shouldShowResultInDogYears === true) {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`)
} else {
    console.log(`Your dog will be ${dogYear * 7} human years old in ${dogYearFuture}`)
}