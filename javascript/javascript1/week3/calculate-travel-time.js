const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
function travelTimes(speed, distance){
    let timetoTravel = distance / speed;
    let splitNumber = (timetoTravel.toString().split('.')); 
    let test = (splitNumber[0] * 60) + +splitNumber[1];
    let hours = Math.floor(test / 60); 
    let minute = test % 60;
    console.log(`${hours} hours and ${minute} minutes`)

    
}

travelTimes(travelInformation.speed, travelInformation.destinationDistance);


