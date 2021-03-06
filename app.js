window.addEventListener('load', ()=> {
    let latlon;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureCurrent = document.querySelector('.temperature-current');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature-section');
    let temperatureSpan = document.querySelector('.temperature-section span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            latlon = position.coords.latitude + "," + position.coords.longitude;
            let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6325e4049a204a500dc19fe5da49aba0/${latlon}`;
       
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary, icon } = data.currently;
                //DOM elements from api
                temperatureCurrent.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                setIcons(icon, document.querySelector(".icon"));
                //celsius formula
                let celsius = (temperature - 32) * (5/9);

                //change temperature units
                temperatureSection.addEventListener('click', () => {
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C";
                        temperatureCurrent.textContent = Math.floor(celsius);
                    }else{
                        temperatureSpan.textContent = "F";
                        temperatureCurrent.textContent = temperature;
                    }
                })
            })
        });
    }else{
        h1.textContent = "Please allow your browswer to provide your location"

    }
    

    //weather icons
    function setIcons(icon, iconId){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }
});