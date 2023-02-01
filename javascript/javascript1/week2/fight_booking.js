function getFullName(firstName, surName, useFormalName, gender) {
  if (firstName && surName && useFormalName && gender) {
    if (gender === "W") {
      console.log(`Madam ${firstName} ${surName}`);
    } else if (gender === "M") {
      console.log(`Lord ${firstName} ${surName}`);
    }
  } else if (firstName && surName && (!useFormalName || !gender)) {
    console.log(`${firstName} ${surName}`);
  } else {
    console.log("Please fill in all questions");
  }
}

const fullname1 = getFullName("Vipavee", "Kositthai", true, "W");
const fullname2 = getFullName("Joachim", "Richter", false, "M");

fullname1;
fullname2;
