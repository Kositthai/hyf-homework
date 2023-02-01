const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.length >= 6) {
    if (studentName === "Queen") {
      class07Students.push(studentName);
    } else {
      console.log("Cannot add more students to class 07");
    }
  } else if (class07Students.indexOf(studentName) !== -1) {
    console.log(`Student ${studentName} is already in the class`);
  } else if (!studentName) {
    console.log("cannot fill in falsey value");
  } else {
    class07Students.push(studentName);
  }
}

function getNumberOfStudent() {
  return class07Students.length;
}

addStudentToClass("One");
addStudentToClass("Two");
addStudentToClass("Three");
addStudentToClass("Four");
addStudentToClass("Five");
addStudentToClass("Six");
addStudentToClass("Six");
addStudentToClass("Queen");
getNumberOfStudent();
