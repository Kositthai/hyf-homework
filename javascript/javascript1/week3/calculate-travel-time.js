const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
function travelTimes(speed, distance){
    const timetoTravel = distance / speed;
    const splitNumber = (timetoTravel.toString().split('.')); 

    const getHours= splitNumber[0]
    const getMinutes = Math.floor(splitNumber[1] / 100 * 60)
   
    console.log(`${getHours} hours and ${getMinutes} minutes`)
    
}

travelTimes(travelInformation.speed, travelInformation.destinationDistance);

