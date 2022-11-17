const userName = [];
const spiriteName = ["The Stalking Patrol", "The Snoring Keeper", "The Watching Butcher", "Stoneweaver", "Oceanlove", "Riverspirit", "The Ivory Shepherd", "Shaydo", "The Black Musician", "The Shy Wizard",];
const createForm = document.createElement("input");
const myForm = document.getElementById("myForm");
const changeSpirit = document.getElementById('change-spirit'); 
const generateBtn = document.getElementById('gernerate-btn')
const getInput = document.querySelector('#selectMethodForm');
const test = document.querySelectorAll('input[name="method"]:checked'); 

changeSpirit.addEventListener('click', changeSpiritName); 

getInput.addEventListener('click', () => {

    const inputValue = document.querySelectorAll('input[name="method"]:checked');
    let method; 

    for(const element of inputValue) {method = element.value;} 

   if(method === 'click'){
        generateBtn.addEventListener('click', submitTheForm); 
        createForm.removeEventListener('mouseover', submitTheForm);
        createForm.removeEventListener('keypress', submitTheForm);   
   } else if(method === 'hover'){   
       createForm.addEventListener('mouseover', submitTheForm); 
       generateBtn.removeEventListener('click', submitTheForm); 
       createForm.removeEventListener('keypress', submitTheForm);   
   } else if(method === 'text'){
        createForm.addEventListener('keypress', submitTheForm); 
        generateBtn.removeEventListener('click', submitTheForm);  
        createForm.removeEventListener('mouseover', submitTheForm); 
   }      
}); 

function submitTheForm(){

    const theName = createForm.value;
    const displaySpiritName = document.getElementById("displaySpiritName");
    const getrandomNumber = Math.floor(Math.random() * 10); 

    if(theName !== '') {
        userName.push(theName);  
        displaySpiritName.innerHTML = `${userName[userName.length -1]} - ${spiriteName[getrandomNumber]}`;
    }     
}; 

function changeSpiritName() {
      
    const getrandomNumber = Math.floor(Math.random() * 10); 

    if(userName.length === 0){
        return alert('please fill in name'); 
    } else {
        displaySpiritName.innerHTML = `${userName[userName.length -1]} - ${spiriteName[getrandomNumber]}`;
    }
}

myForm.append(createForm); 
myForm.appendChild(displaySpiritName);

