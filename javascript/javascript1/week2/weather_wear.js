function weatherWear(temperature) {
  if (temperature < 5) {
    console.log("winter jacket");
  } else if (temperature <= 10) {
    console.log("light to medium coat");
  } else if (temperature <= 15) {
    console.log("Fleece");
  } else if (temperature <= 20) {
    console.log("Short sleeves");
  } else if (temperature <= 30) {
    console.log("Short");
  }
}

weatherWear(15);
