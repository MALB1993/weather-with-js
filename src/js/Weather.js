// Define a class named Weather which handles weather data fetching from an API
export default class Weather {
    constructor(appUrl, apiKey){
        this.appUrl = appUrl; // Initialize the API endpoint URL
        this.apiKey = apiKey; // Initialize the API key required for authentication
    }

    // Asynchronous method to fetch weather data for a specified city
    async fetchWeatherData(city) {
        try {
            // Construct the URL for fetching weather data including city name, units, and API key
            const response = await fetch(`${this.appUrl}?q=${city}&units=metric&appid=${this.apiKey}`);

            // Check if the fetch operation was successful (status code 200-299)
            if (!response.ok) {
                console.error('Network response was not ok'); // Throw an error if response status is not ok
            }

            // Parse the JSON response from the API
            const data = await response.json();

            // Return the parsed weather data object
            return data;

        } catch (error) {
            console.error('There has been a problem with your fetch operation'); // Log any errors that occur during the fetch operation
        }
    }
}
