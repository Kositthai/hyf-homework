const dogYearOfBirth = 2020;
const dogYearFuture = 2030;
const dogYear = (dogYearFuture - dogYearOfBirth); 
const shouldShowResultInDogYears = true;


if (shouldShowResultInDogYears === true) {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`)
} else {
    console.log(`Your dog will be ${dogYear * 7} human years old in ${dogYearFuture}`)
}