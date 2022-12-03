
// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
window.addEventListener('load', () => setTimeout(() => console.log('called after 2.5 seconds'), 2500)); 

// Create a function that takes 2 parameters: delay and stringToLog. 
// Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function logString(delay, stringToLog) {
    
        setTimeout(() => {
        console.log(stringToLog)
     
    }, delay * 1000)
}

logString(3,'This string logged after 3 seconds'); 
logString(5,'This string logged after 5 seconds'); 

// Create a button in html. When clicking this button, 
// use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
document.getElementById('btn').addEventListener('click', () => {
    logString(5, 'Called after 5 seconds')
})

// Create two functions and assign them to two different variables.
// One function logs out Earth, the other function logs out Saturn.
// Now create a new third function that has one parameter: planetLogFunction. 
// The only thing the third function should do is call the provided parameter function. 
// Try call the third function once with the Earth function and once with the Saturn function.
function earthLogger() {
    console.log('Earth')
}
function saturnLogger() {
    console.log('Saturn')
}

function planetLogFunction(thePlanet) {
    return thePlanet; 
}

planetLogFunction(earthLogger()); 
planetLogFunction(saturnLogger()); 

// Create a button with the text called "Log location". 
// When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
const locationBtn = document.getElementById('locationBtn'); 
const displayLocation = document.getElementById('displayLocation')

function successCallback(position){
    const thePosition = position.coords; 
    displayLocation.innerHTML = 
        `<h3>This is latitude ${thePosition.latitude}</h3>
        <h3>This is longitude ${thePosition.longitude}</h3>`;   
}

function errorCallback(error){
    console.error(error); 
}

locationBtn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback); 
})

// Create a function called runAfterDelay. It has two parameters: 
// delay and callback. When called the function should wait delay seconds and then call the provided callback function.
// Try and call this function with different delays and different callback functions
function runAfterDelay(delay, callback) {
   setTimeout((callback), delay * 1000)
}

runAfterDelay(6, function(){
    console.log('should be logged after 6 seconds')
})

runAfterDelay(4, function(){
    console.log('should be logged after 4 seconds')
})

// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
// If a double click has been detected, log out the text: "double click!"
document.addEventListener('dblclick', () => console.log('double click'))

// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, 
// logFunnyJoke - function and logBadJoke - function. 
// If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
    if(shouldTellFunnyJoke === true){
        logFunnyJoke()
    } else if (shouldTellFunnyJoke === false){
        logBadJoke()
    }
}

function logFunnyJoke(){
    console.log('Funny Joke')
}

function logBadJoke() {
    console.log('Bad Joke')
}

jokeCreator(false, logFunnyJoke, logBadJoke)
jokeCreator(true, logFunnyJoke, logBadJoke)

// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const items = [logOne, logTwo, logThree]

function logOne() {console.log('log one')}
function logTwo() {console.log('log two')}
function logThree() {console.log('log three')} 

items.forEach((func) => func()); 

// Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested:
const anonymousfunc = function() {
    console.log('This is anonymous function expression');  // anonymousfunc() // canot called before definition 
}

function funcDeclaration() {
    console.log('This is function declaration'); // funcDeclaration() // can called both after and before definition
}

anonymousfunc()
funcDeclaration()

// Create an object that has a key whose value is a function. Try calling this function.
const objectAsFunc = {
    'Firstname': function(){
    return 'Vipavee'; 
}}

console.log(objectAsFunc.Firstname());  
