// save note
const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote("Shopping", 1);
saveNote("Pick up groceries", 2);
console.log(notes)

// Unique feature // 
function removeNote(content, id) {
  
  const removeItem = notes.find((element) => 
  element.content === content && element.id === id)

    if(removeItem === undefined){
      console.log('Cannot find this information'); 
    } else { 
      const indexOfRemoveItem = notes.indexOf(removeItem);
      notes.splice(indexOfRemoveItem, 1);
      return console.log('Remove note successfully.')
    }
}

removeNote('Shopping', 1)
console.log(notes);

function getNote(id) {

  for(element of notes){
    if(id === element.id){
      return element; 
    } else if (id !== element.id) {
      return 'This id does not exist'; 
    } else return 'Do not have any notes, please creating a note'; 
  }  
}

// I added this variable here becuase I need to get a list of notes first to get the retsult after calling getNote function
// I did put this variable on the second line but it return me undefind because JS read code from top to below
const firstNote = getNote(2); 
console.log(firstNote); 


function logOutNotesFormatted() {

  for (const element of notes)
    console.log(`The note with id: ${element.id}, has following note text: ${element.content}`);
    
}

 logOutNotesFormatted()
