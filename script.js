
// current weather
const api = {
key: 'd68b50edd82510a05274ac43ce5e95db',
url: 'https://api.openweathermap.org/data/2.5/weather'

}

const city = document.getElementById('timezone')
const date = document.getElementById('date')
const tempImg = document.getElementById('weatherIcon')
const temp = document.getElementById('degreenumber')
const weather = document.getElementById('description')
const container = document.querySelector('.days__container')
const icons = document.querySelector('icons')





async function search(query) {
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api.key}`)
        const data = await response.json();
        console.log(data);
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        date.innerHTML = (new Date()).toLocaleDateString();
        temp.innerHTML = `${Math.floor(data.main.temp)+"°C"} `;
        weather.innerHTML = data.weather[0].description;
        range.innerHTML = `min${Math.floor(data.main.temp_min)+"°C"} / max${Math.floor(data.main.temp_max)+"°C"}`
        const iconDisplay = document.querySelector(".icon");
        iconDisplay.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    } catch (err){
        console.log(error);
    }
    
}

// end here



function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
    apiSlapsh(searchbox.value);
}

// end here

const form = document.getElementById('search__submit');
const searchbox = document.getElementById('search__input');
form.addEventListener('submit', onSubmit, true );



window.onload = () =>{
    search('Namur')
    
}


// api from unsplash
const API_KEY ='L5CngvUGpBViiSyDRJW1uHdsxShhy0fJF98H9hkVuyg'


function apiSlapsh(value){
    let Unsplash = `https://api.unsplash.com/search/photos?query=${value}&client_id=${API_KEY}`

    fetch(Unsplash)
    .then(response => response.json())
    .then(result => unSplashDetails(result))
    
}
function unSplashDetails(value){
    const backgroundImage = value.results[2].urls.regular;
    document.body.style.backgroundImage= `url(${backgroundImage})`
    document.body.style.backgroundSize = 'cover, centre';
    console.log(value);
}
//end here