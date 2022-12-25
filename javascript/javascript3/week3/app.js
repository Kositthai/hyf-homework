const btn = document.getElementById("btn");
const inputURL = document.getElementById("inputURL");
const renderDiv = document.getElementById("renderDiv");
const listBtn = document.getElementById("listBtn");
const renderTheList = document.getElementById("renderTheList");

let screenshotLists;
const getUserID = sessionStorage.getItem("userID"); // you can use the sessionStorage object to store data that is accessible across multiple pages in the same window or tab. 

const captureScreenshot = async () => {
  const inputURLValue = inputURL.value;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": SCREEN_SHOT_API,
      "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
    },
  };

  if (inputURLValue.length === 0) {
    alert('please insert the URL link')
  } else {
    try {
      const response = await fetch(
        `https://website-screenshot6.p.rapidapi.com/screenshot?url=${inputURLValue}`, options);
      const data = await response.json();
      console.log(data)

      screenshotLists = data;
      renderDiv.innerHTML = `
          <img src="${screenshotLists.screenshotUrl}">
          <button class="saveBtn" onclick="saveScreenshot(screenshotLists, getUserID)">SAVE</button>
          `;
    } catch (error) {
      alert("Sorry, there was a problem in operation");
      console.error(error);
    }
  }
};

const saveScreenshot = async (screenshotLists, getUserID) => {
  const body = {
    imgURL: screenshotLists.screenshotUrl,
    /* send data to server. so everytime, you save screenshort, it will also send your userID
    this will help you to restrive the data acccording to userID in displayList func
    */
    userID: getUserID,
  };

  try {
    const response = await fetch(
      `https://crudcrud.com/api/${CRUDCRUD_API}/blog`, {
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

const getListsFromServer = async () => {
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
  listBtn.classList.toggle('active');

  if (listBtn.classList.contains('active')) {
    const data = await getListsFromServer();
    renderTheList.innerHTML = "";

    screenshotLists = data.filter((screenshotLists) => {
      if (screenshotLists.userID === getUserID) {
        return screenshotLists;
      }
    });

    if (screenshotLists.length != 0) {
      screenshotLists.forEach((list) => {
        renderTheList.innerHTML += patternToDisPlayList(list); //  += will use to append the string to the existing element when working with innerHTML
      });
    } else {
      alert("Sorry, Do not have any screenshot right now...");
    }
  } else {
    renderTheList.innerHTML = "";
  }
};

const deleteScreenshot = async (postID) => {
  try {
    const response = await fetch(
      `https://crudcrud.com/api/${CRUDCRUD_API}/blog/${postID}`, {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      alert("Deleted an items successfully");
      // This will return items that doesnt be in postId which is the item that we want to delete and return it back to variable screenshotLists.
      screenshotLists = screenshotLists.filter((deleteItem) => {
        if (deleteItem._id !== postID) {
          return screenshotLists;
        }
      });

      renderTheList.innerHTML = ""; // if you dont clear renderThelist before then it will append with exist element
      screenshotLists.forEach((updateList) => {
        renderTheList.innerHTML += patternToDisPlayList(updateList);
      });
    }
  } catch (error) {
    alert("Error deleting item");
  }
};

const patternToDisPlayList = (insertList) => {
  return `
        <img src="${insertList.imgURL}">
        <button class='deleteBtn' onclick="deleteScreenshot('${insertList._id}')">DELETE</button>
    `;
};

btn.addEventListener("click", captureScreenshot);
listBtn.addEventListener("click", toDisplayList);