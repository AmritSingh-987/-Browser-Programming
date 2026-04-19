const cityText = document.getElementById("city");
const temperatureText = document.getElementById("temperature");
const windText = document.getElementById("wind");
const output = document.getElementById("output");

function log(msg) { output.textContent += msg + "\n"; }

document.getElementById("btnKuopio").onclick = function () {
    loadWeather("Kuopio", 62.8924, 27.6770);
};

async function loadWeather(cityName, lat, lon) {
    output.textContent = "Fetching weather data...";
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("HTTP Error: " + response.status);
        const data = await response.json();

        cityText.textContent = cityName;
        temperatureText.textContent = data.current.temperature_2m + " °C";
        windText.textContent = data.current.wind_speed_10m + " km/h";

        log("Success! Data loaded for " + cityName);
    } catch (err) {
        log("Error: " + err.message);
    }
}
