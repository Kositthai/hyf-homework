const submitBtn = document.getElementById("submit-btn");
const displayScreenshot = document.getElementById("display-screenshot");
const listBtn = document.getElementById("list-btn");
const displayScreenshotsList = document.getElementById(
  "display-screenshots-list"
);

let screenshotsList;
// you can use the sessionStorage object to store data that is accessible across multiple pages in the same window or tab.
const getUserID = sessionStorage.getItem("userID");

const captureScreenshot = async () => {
  const URLInput = document.getElementById("url-input");
  const URLInputValue = URLInput.value;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": SCREEN_SHOT_API,
      "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
    },
  };

  if (URLInputValue.length === 0) {
    alert("Please insert the URL link");
  } else {
    fetch(
      `https://website-screenshot6.p.rapidapi.com/screenshot?url=${URLInputValue}`,
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        screenshotsList = data;
        displayScreenshot.innerHTML = `
          <img src="${screenshotsList.screenshotUrl}">
          <button class="save-btn" onclick="saveScreenshot(screenshotsList, getUserID)">SAVE</button>
          `;
      })
      .catch((error) => {
        alert(`
        Sorry, something went wrong. 
        Please check your URL link or try again later`);
        console.error(error);
      });
  }
};

const saveScreenshot = async (screenshotsList, getUserID) => {
  const body = {
    imgURL: screenshotsList.screenshotUrl,
    /* send data to server. so everytime, you save screenshort, it will also send your userID
    this will help you to restrive the data acccording to userID in displayList func
    */
    userID: getUserID,
  };

  try {
    const response = await fetch(
      `https://crudcrud.com/api/${CRUDCRUD_API}/blog`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      alert("save img successfully");
    }
  } catch (error) {
    alert("Sorry, there was a problem in operation");
    console.error(error);
  }
};

const getListFromAPI = async () => {
  try {
    const response = await fetch(
      `https://crudcrud.com/api/${CRUDCRUD_API}/blog/`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Sorry, there was a problem in operation");
    console.error(error);
  }
};

const toDisplayList = async () => {
  listBtn.classList.toggle("active");

  if (listBtn.classList.contains("active")) {
    const data = await getListFromAPI();
    displayScreenshotsList.innerHTML = "";

    screenshotsList = data.filter(
      (screenshotsList) => screenshotsList.userID === getUserID
    );

    if (screenshotsList.length != 0) {
      screenshotsList.forEach((list) => {
        displayScreenshotsList.innerHTML += patternToDisPlayList(list); //  += will use to append the string to the existing element when working with innerHTML
      });
    } else {
      alert("Sorry, Do not have any screenshot right now...");
    }
  } else {
    displayScreenshotsList.innerHTML = "";
  }
};

const deleteScreenshot = async (postID) => {
  try {
    const response = await fetch(
      `https://crudcrud.com/api/${CRUDCRUD_API}/blog/${postID}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      alert("Deleted an items successfully");
      // This will return items that doesnt be in postId which is the item that we want to delete and return it back to variable screenshotsList.
      screenshotsList = screenshotsList.filter(
        (deleteItem) => deleteItem._id !== postID
      );

      displayScreenshotsList.innerHTML = ""; // if you dont clear displayScreenshotsList before then it will append with exist element
      screenshotsList.forEach((updateList) => {
        displayScreenshotsList.innerHTML += patternToDisPlayList(updateList);
      });
    }
  } catch (error) {
    alert("Error deleting item");
  }
};

const patternToDisPlayList = (insertList) => {
  return `
        <img src="${insertList.imgURL}">
        <button class='delete-btn' onclick="deleteScreenshot('${insertList._id}')">DELETE</button>
    `;
};

submitBtn.addEventListener("click", captureScreenshot);
listBtn.addEventListener("click", toDisplayList);
