window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            cons api = 'https://api.darksky.net/forecast/6325e4049a204a500dc19fe5da49aba0/${lat},${long}'
        });
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature, summary} = data.currently;
            })
    }else{
        h1.tectContemt = "Please allow your browswer to provide your location"
    }
});