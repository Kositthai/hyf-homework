function upcomingEvent(passInDate) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const today = new Date();
  const weekday = today.getDay();
  const eventNumber = (weekday + passInDate) % 7;

  return days[eventNumber];
}

upcomingEvent(5);
