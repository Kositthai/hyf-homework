const input = document.querySelector('input'); 
const inputGIFsNumber = document.getElementById('inputGIFsNumber'); 
const searchBtn = document.getElementById('searchBtn'); 
const displayGIFs = document.getElementById('displayGIFs'); 

inputGIFsNumber.addEventListener('keyup', searchGIF); 
searchBtn.addEventListener('click', searchGIF); 
// assign second parameter to searchGIF same as searchBtn. the searchGIF function will run again when user typeing something in this element
// which means first time that user search only for keyword will run the code and go to condition else if which URL link doesnt have limit attribute
// and when the user fill in number of gifs, then searchGIF will run from the start again and this time numberOfGIFs will get value and code will run to condition if
// which URL link will add limit attribute and take number of limit from numberOfGIFs variable.

function searchGIF(){
    
    const keyword = input.value;  
    const numberOfGIFs = inputGIFsNumber.value;  
    let url = 'https://api.giphy.com/v1/gifs/search?q=' + keyword + '&api_key=VfAqDgD4YHbcPlyELNlOFIYYQLaHlMYF';
    // clear content with parent element instead of child element. this will remove img tag from displayGIFs. once, its removed then the img will also disappear.
    displayGIFs.innerHTML = ''; 

        if(numberOfGIFs !== '' && keyword !== '') {
                url = 'https://api.giphy.com/v1/gifs/search?q=' + keyword + '&limit='+ numberOfGIFs + '&api_key=VfAqDgD4YHbcPlyELNlOFIYYQLaHlMYF';
                displayImg(url)
        } else if (keyword !== ''){
                displayImg(url)
        } else {alert('Please fill in keyword fo searching')}
}

function displayImg(url) {

    fetch(url)
        .then(response => response.json())
        .then(gits => {
                gits.data.forEach(gifs => {                   
                    const imgPath = gifs.images.fixed_height.url;
                    const img = document.createElement('img'); 

                    img.setAttribute('src', imgPath)                     
                    displayGIFs.appendChild(img)
                })
        })
}




