const assistant = {};
const addToDosList = (assistant.toDos = []);

function getReply(command) {

const getUserName = command.split(" ").pop();

  if (command.includes("What is my name?") && Object.keys(assistant).length === 1) {

    console.log("Please introduce yourslef firtst");

  } else if (command.includes("Hello my name is")) {

    console.log(`Nice to meet you ${getUserName}`);
    assistant.userName = getUserName;

  } else if (command.includes("What is my name?") && Object.keys(assistant).length > 1) {

    console.log(`Your name is ${assistant.userName}`);

  } else if (command.includes("Add")) {

    const pattern = RegExp(/(?<=Add )(.*)(?= to )/);
    const wordAfterRegExp = pattern.exec(command);
    addToDosList.push(wordAfterRegExp[0]);
    
    console.log(`${wordAfterRegExp[0]} added to my todo`);
   
  } else if (command.includes("Remove")) {
    const pattern = RegExp(/(?<=Remove )(.*)(?= to )/);
    const wordAfterRegExp = pattern.exec(command);
    const reMoveToDos = wordAfterRegExp[0];
    const result = assistant.toDos.indexOf(reMoveToDos);
    
    assistant.toDos.splice(result, 1);
    console.log(`${wordAfterRegExp[0]} removed to my todo`); 
   
  } else if (command.includes("What is on my todo?")) {

    const numberOfList = assistant.toDos.length;
    console.log(`You have ${numberOfList} toDos - ${assistant.toDos}`);

  } else if (command.includes("What day is it today?")) {

    const today = new Date();
    const getTheDate = today.getDate();
    const getMonthName = today.toLocaleString("en-us", { month: "long" });
    const getTheYear = today.getFullYear();

    console.log(`${getTheDate} of ${getMonthName} ${getTheYear}`);

  } else if (command.includes("What is")) {

    const getTheNumber = command.slice(8);
    const math = eval(getTheNumber);

    console.log(`The result is ${math}`);

  } else if (command.includes("dice")) { // Add one or more command to your voice assistant // 

    const random = Math.floor(Math.random() * 6) + 1;
    console.log(`Your dice is ${random}`);

  } else if (command.includes("Set a time")) {

    const pattern = RegExp(/(?<=for )(.*)(?= minutes)/);
    const wordAfterRegExp = pattern.exec(command);
    const setTheTime = wordAfterRegExp[0];
    const convertTime = setTheTime * 60000;

    console.log(`Timer set for ${setTheTime} minutes`);

    function timer() {
      console.log("Time done");
    }
    setTimeout(timer, convertTime);
    
  } else { console.log('This command not available yet');}
  
}

getReply("What is my name?");
getReply("Hello my name is Vipavee");
getReply("What is my name?");
getReply("Add fishing to my toDos");
getReply("Add study to my toDos");
getReply("Remove fishing to my toDos");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("What is 12 / 4");
getReply("Please give me random dice rolling");
getReply("Set a time for 0.5 minutes");
getReply('Go to youtube'); 

