let temperature = 32; 

switch(true){
  case (temperature < 5): 
  console.log('winter jacket');
  break;
  case (temperature <= 10):
  console.log('light to medium coat');
  break; 
  case (temperature <= 15):
  console.log('Fleece');
  break; 
  case (temperature <= 20):
  console.log('Short sleeves');
  break;
  case (temperature <= 30 || temperature > 30 ):
  console.log('Short');
  break;
}
