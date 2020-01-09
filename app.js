window.addEventListener('load', ()=> {
    let latlon;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureCurrent = document.querySelector('.temperature-current');
    let locationTimezone = document.querySelector('.location-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            latlon = position.coords.latitude + "," + position.coords.longitude;
            let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6325e4049a204a500dc19fe5da49aba0/${latlon}`;
       
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary} = data.currently;
                //DOM elements from api
                temperatureCurrent.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
            })
        });
    }else{
        h1.tectContemt = "Please allow your browswer to provide your location"
    }
});