const seriesDurations = [
  {
    title: "Vikings",
    days: 2,
    hours: 21,
    minutes: 19,
  },
  {
    title: "The 100",
    days: 2,
    hours: 7,
    minutes: 14,
  },
  {
    title: "The witcher",
    days: 0,
    hours: 20,
    minutes: 2,
  },
];

const totalTime = [];

function logOutSeriesText() {
  const totalminutefor80Year = 42048000; // 80 * 525600
  let sum = 0; 
  for (let i = 0; i < seriesDurations.length; i++) {
    const covertDayToMinute = seriesDurations[i].days * 1440;
    const convertHoursToMinute = seriesDurations[i].hours * 60;
    const totalMinute = covertDayToMinute + convertHoursToMinute + seriesDurations[i].minutes;
    const percentage = ((totalMinute / totalminutefor80Year) * 100).toFixed(5);

    sum += +percentage; 
    console.log(`${seriesDurations[i].title} took ${percentage}% of my life`);
  
  }
  
  console.log(sum.toFixed(5))
  console.log(`In total that is ${sum.toFixed(5)} of my life`);
}

logOutSeriesText();
