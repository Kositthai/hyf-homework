const startGameBtn = document.getElementById("startGameBtn");
const insertTime = document.getElementById("insertTime");
const displayL = document.getElementById("displayL");
const displayS = document.getElementById("displayS");
const displayWinnerL = document.getElementById("displayWinnerL");
const displayWinnerS = document.getElementById("displayWinnerS");
const myCanvasS = document.getElementById("my-canvas-s");
const myCanvasL = document.getElementById("my-canvas-l");
const countD = document.getElementById('countD'); 
const confettiSettingsS = { target: "my-canvas-s" };
const confettiSettingsL = { target: "my-canvas-l" };

let countL = 0;
let countS = 0;

const startCounter = function(e) {
    if (e.key === "l" || e.key === "L") {
        countL++;
        displayL.innerHTML = countL;
    } else if (e.key === "s" || e.key === "S") {
        countS++;
        displayS.innerHTML = countS;
    }
}; 

const resetCounter = () => {
    document.removeEventListener("keypress", startCounter);
    countL = 0;
    countS = 0;
};

const countDownGame = function(){
    let timeleft = insertTime.value; 
    const downloadtimer = setInterval(function() {
        timeleft--; 
        document.getElementById('countD').textContent = timeleft; 

        if(timeleft <= 0){
            clearInterval(downloadtimer); 
            countD.textContent = 'Time Out!'; 
        }

    }, 1000)
}

startGameBtn.addEventListener("click", startGame);

function startGame() {
    const confettiS = new ConfettiGenerator(confettiSettingsS);
    const confettiL = new ConfettiGenerator(confettiSettingsL);
    const getValue = insertTime.value;

    displayL.innerHTML = "";
    displayS.innerHTML = "";

    displayWinnerS.style.display = "none";
    displayWinnerL.style.display = "none";
    myCanvasS.style.display = "none";
    myCanvasL.style.display = "none";

    if (getValue > 0) {

        document.addEventListener("keypress", startCounter);
        countDownGame(); 

        setTimeout(() => {
            if (countS > countL) {
                    confettiS.render();
                    resetCounter();
                        displayWinnerS.style.display = "block";
                        myCanvasS.style.display = "block"; 
            } else if (countL > countS) {
                    confettiL.render();
                    resetCounter();
                        displayWinnerL.style.display = "block";
                        myCanvasL.style.display = "block";   
            } else if (countL === 0 && countS === 0) {
                    alert("You have to press L or S to get a score!");
                    resetCounter();
            } else if (countL === countS) {
                    alert("It was a draw!");
                    resetCounter();
            }
        }, getValue * 1000);

  } else alert("Please set the time!");
}; 
