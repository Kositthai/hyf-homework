const activities = [];
const aDate = new Date();
const getTheDate = aDate.getDate();
const getTheMonth = aDate.getMonth() + 1;
const getTheYear = aDate.getFullYear();
const today = `${getTheDate}/${getTheMonth}/${getTheYear}`;
const limitUsage = 60;


function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}

addActivity("1/11/2022", "this is date 1", 5);
addActivity(today, "check email", 20);


function showStatus(activities) {
  let sum = 0;
  for (element of activities) {
    sum += element.duration;
  }

  if (activities.length > 0) {
    if (sum > limitUsage) {
      console.log("You have reached your limit, no more smartphoning for you!");
    } else {
      console.log(
        `You have added ${activities.length} activities. They amount to ${sum} mins. of usage`
      );
    }
  } else {
    console.log("Add some activities before calling showStatus");
  }
}

showStatus(activities);

