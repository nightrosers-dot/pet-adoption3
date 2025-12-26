async function start() {
    try {
        const weatherDataPromise = await fetch(
            "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
        );
        const weatherData = await weatherDataPromise.json();

        const ourTemperature =
            weatherData.properties.periods[0].temperature;

        document.querySelector("#temperature-output").textContent =
            ourTemperature;
    } catch (error) {
        console.error(error);
    }
}

start();
