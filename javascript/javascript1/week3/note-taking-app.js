const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote("Pick up groceries", 2);
saveNote("Shopping", 3);

// Unique feature // 
function removeNote(content, id) {
  let removeItem = notes.find(
    (element) => element.content === content && element.id === id)
    console.log(removeItem)
    if(removeItem === undefined){
      console.log('cannot find this information'); 
    } else { 
      let indexOfRemoveItem = notes.indexOf(removeItem);
      notes.splice(indexOfRemoveItem, 1)
    }
}

removeNote('Shopping', 1)
console.log(notes);

function getNote(id) {
  //I tried this many time with find() && filter () method but doesnt work
  // because I used thoese methods outside the function and used thoese method callback functionName
  // after that ** rememeber to return the value , otherwise undefind.
  let getInfoByID = notes.find((element) => element.id === id);
  return getInfoByID;
}

// I added this variable here becuase I need to get a list of notes first to get the retsult after calling getNote function
// I did put this variable on the second line but it return me undefind because JS read code from top to below
const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
  for (const element of notes)
    console.log(
      `The note with id: ${element.id}, has following note text: ${element.content}`
    );
}

 logOutNotesFormatted()
