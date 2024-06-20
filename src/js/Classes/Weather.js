export default class Weather {
    constructor(cityName, api) {
        this.cityName = cityName;
        this.api = api;
    }

    async getWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&lang=fa&appid=${this.api}`);

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error("Error: rejected!");
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
}
