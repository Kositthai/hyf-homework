
function changeMode() {
  const changeBackground = document.querySelector('body'); 
  const icon = document.querySelector('i')
  const button = document.querySelector('#mode')
 
  // apply changeBackground (body) to toggle because when click the button the class dark mode appear to the body element 
  changeBackground.classList.toggle('dark-mode'); 
    if(changeBackground.className === 'dark-mode'){
      icon.style.color = 'black'
      button.style.background = 'white'
      // access className of icon and assign className to 'fas fa-sun'
      icon.className = 'fas fa-sun'; 
    } else { 
      icon.className = 'fas fa-moon'
      icon.style.color = 'white'
      button.style.background = 'black'
    }
}

