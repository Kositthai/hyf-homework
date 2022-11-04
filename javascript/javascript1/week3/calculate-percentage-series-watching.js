// series duration of life //
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

function logOutSeriesText(nameOfSeries) {
  let totalminutefor80Year = 42048000; // 80 * 525600
  for (i = 0; i < seriesDurations.length; i++)
    if (nameOfSeries === seriesDurations[i].title) {
      let covertDayToMinute = seriesDurations[i].days * 1440;
      let convertHoursToMinute = seriesDurations[i].hours * 60;
      let totalMinute =
        covertDayToMinute + convertHoursToMinute + seriesDurations[i].minutes;
      let percentage = ((totalMinute / totalminutefor80Year) * 100).toFixed(5);
      console.log(`${seriesDurations[i].title} took ${percentage}% of my life`);
    }
}

logOutSeriesText("The witcher");
