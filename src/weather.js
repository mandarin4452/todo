const weather_block = document.querySelector(".weather");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "b5f3739ca0aab006051b4b4070172494";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        let location = data.name;
        let weather = data.weather[0].main;
        let temp = data.main.temp;
        let info = temp + "°C | " + weather;
        let temp_text = document.createElement("p");
        temp_text.innerHTML = info + "<br>" + location;

        document.querySelector(".weather").appendChild(temp_text);
        

    })
}
function onGeoErr() {
    let err_text = document.createElement("p");
    err_text.innerHTML = "Allow current position to get weather!";
    document.querySelector(".weather").appendChild(err_text);

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);