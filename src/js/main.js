// Importing styles and libraries
import '../scss/styles.scss'; // Importing SCSS styles
import $ from 'jquery'; // Importing jQuery library (optional)
import * as bootstrap from 'bootstrap'; // Importing Bootstrap if needed (optional)

// Importing local modules
import Weather from './Weather'; // Importing Weather class from Weather.js
import Ui from './Ui'; // Importing Ui class from Ui.js

// Creating instances of Weather and Ui classes
const weatherApp = new Weather("https://api.openweathermap.org/data/2.5/weather", "3b1696b477803e97eb3da392586401f2"); // Creating Weather instance with API endpoint and API key
const ui = new Ui(); // Creating Ui instance
const cityInput = document.getElementById("city-input");


cityInput.addEventListener("input", (evt) => {
    const cityTarget = evt.target.value
    // Fetching weather data for a specific city ("tehran" in this case)
    weatherApp.fetchWeatherData(cityTarget).then((response) => { // Fetching weather data asynchronously
        // Extracting specific data from the response object
        const responseWeather = response.weather[0]; // Extracting weather information from the response
        const mainWeather = response.main; // Extracting main weather data (temperature, pressure, humidity, etc.)
        const windWeather = response.wind; // Extracting wind data (degree and speed)
        const sysWeather = response.sys;

        // Displaying weather data using the Ui class methods
        ui.display("city-name", response.name); // Displaying city name
        ui.display("country-name", sysWeather.country); // Displaying country name
        ui.displayImage("image", responseWeather.icon); // Displaying weather icon
        ui.display("weather-description", responseWeather.description); // Displaying weather description
        ui.display("temp", mainWeather.temp); // Displaying current temperature
        ui.display("temp_max", mainWeather.temp_max); // Displaying maximum temperature
        ui.display("temp_min", mainWeather.temp_min); // Displaying minimum temperature
        ui.display("pressure", mainWeather.pressure); // Displaying atmospheric pressure
        ui.display("humidity", mainWeather.humidity); // Displaying humidity percentage
        ui.display("deg", windWeather.deg); // Displaying wind direction
        ui.display("speed", windWeather.speed); // Displaying wind speed
    }).catch(error => {
        console.error(error);
    });


});