function displayTemperature(response){
    console.log(response.data.main.temp);
}

let apiKey = "c064a1d958e6c2a52bab92fa47962081";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=c064a1d958e6c2a52bab92fa47962081`;


axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemperature);