const cityText = document.getElementById("city");
const temperatureText = document.getElementById("temperature");
const windText = document.getElementById("wind");
const timeText = document.getElementById("time");
const output = document.getElementById("output");

function log(message) {
    output.textContent += message + "\n";
}

function clearOutput() {
    output.textContent = "";
}

// Extension 1: Reusable function for all cities
async function loadWeatherByCity(cityName, latitude, longitude) {
    clearOutput();
    log(`Fetching weather for ${cityName}...`);

    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        // Accessing nested fields
        const temp = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;
        const time = data.current.time;

        // Extension 3: Change background based on temperature
        if (temp < 0) {
            document.body.className = "cold";
        } else {
            document.body.className = "mild";
        }

        // Update UI
        cityText.textContent = cityName;
        temperatureText.textContent = temp + " °C";
        windText.textContent = wind + " km/h";
        timeText.textContent = time.replace("T", " "); // Extension 2: formatting time

        log("City: " + cityName);
        log("Temperature: " + temp + " °C");
        log("Wind Speed: " + wind + " km/h");
        log("Data Time: " + time);

    } catch (error) {
        log("Error: " + error.message);
    }
}

// Event listeners for the three buttons
document.getElementById("btnKuopio").onclick = () => loadWeatherByCity("Kuopio", 62.8924, 27.6770);
document.getElementById("btnHelsinki").onclick = () => loadWeatherByCity("Helsinki", 60.1699, 24.9384);
document.getElementById("btnOulu").onclick = () => loadWeatherByCity("Oulu", 65.0121, 25.4651);
