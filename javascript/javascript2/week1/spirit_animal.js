const spiriteName = ["The Stalking Patrol", "The Snoring Keeper", "The Watching Butcher", "Stoneweaver", "Oceanlove", "Riverspirit", "The Ivory Shepherd", "Shaydo", "The Black Musician","The Shy Wizard"];
const createForm = document.createElement("input");
const generateSpiritSection = document.getElementById("generateSpiritSection");
const generateBtn = document.getElementById("gernerate-btn");
const changeSpirit = document.getElementById("change-spirit");
const selectMethodForm = document.querySelector("#selectMethodForm");
let theName = "";

selectMethodForm.addEventListener("click", () => {
    const inputValue = document.querySelectorAll('input[name="method"]:checked');
    let method;

    for (const element of inputValue) {
        method = element.value;
    }

    if (method === "click") {
        generateBtn.addEventListener("click", spiritNameGenerator);
        createForm.removeEventListener("mouseover", spiritNameGenerator);
        createForm.removeEventListener("keypress", spiritNameGenerator);
    } else if (method === "hover") {
        createForm.addEventListener("mouseover", spiritNameGenerator);
        generateBtn.removeEventListener("click", spiritNameGenerator);
        createForm.removeEventListener("keypress", spiritNameGenerator);
    } else if (method === "text") {
        createForm.addEventListener("keypress", spiritNameGenerator);
        generateBtn.removeEventListener("click", spiritNameGenerator);
        createForm.removeEventListener("mouseover", spiritNameGenerator);
    } 
});

function spiritNameGenerator() {
    theName = createForm.value;
    const displaySpiritName = document.getElementById("displaySpiritName");
    const getrandomNumber = Math.floor(Math.random() * 10);
        if (theName !== "") {
            displaySpiritName.innerHTML = `${theName} - ${spiriteName[getrandomNumber]}`;
        } else {
            return alert("Please fill in name!");
        }
}

generateSpiritSection.append(createForm);
generateSpiritSection.appendChild(displaySpiritName);