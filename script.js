document.getElementById('dom').innerHTML='Sabbir';
// https://dog.ceo/api/breeds/image/random

const dogImgDiv = document.getElementById('dom')

fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
    //console.log(json.message);
    dogImgDiv.innerHTML = `<img 
    src='${json.message}' height = 300 weidth = 300/>`
});



