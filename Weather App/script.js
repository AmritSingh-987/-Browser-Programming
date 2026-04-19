/* ==========================================================
   WEATHER DASHBOARD LOGIC — AMRIT SINGH
   ========================================================== */

// UI Element References
const cityText = document.getElementById("city");
const temperatureText = document.getElementById("temperature");
const windText = document.getElementById("wind");
const timeText = document.getElementById("time");
const output = document.getElementById("output");

// Helper: Add text to the technical log area
function log(message) {
    output.textContent += `[${new Date().toLocaleTimeString()}] ${message}\n`;
}

// Helper: Clear previous data
function clearOutput() {
    output.textContent = "";
}

/**
 * Main function to fetch and display weather
 * cityName: Name of city to show on UI
 * lat/lon: Coordinates for the Open-Meteo API
 */
async function loadWeatherByCity(cityName, lat, lon) {
    clearOutput();
    log(`Requesting data for ${cityName}...`);

    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`;
        
        const response = await fetch(url);

        // Check if the server responded correctly
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Extract values from the nested JSON object
        const temp = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;
        const time = data.current.time;

        // --- DYNAMIC BACKGROUND LOGIC ---
        if (temp < 0) {
            document.body.className = "cold";
        } else if (temp >= 0 && temp <= 20) {
            document.body.className = "mild";
        } else {
            document.body.className = "hot";
        }

        // Update the Webpage UI
        cityText.textContent = cityName;
        temperatureText.textContent = `${temp} °C`;
        windText.textContent = `${wind} km/h`;
        
        // Format time (remove the 'T' separator from API)
        if(timeText) timeText.textContent = time.replace("T", " ");

        // Log the success
        log(`Success: Data received for ${cityName}`);
        log(`Temp: ${temp}°C | Wind: ${wind}km/h`);

    } catch (error) {
        log(`❌ Error: ${error.message}`);
        console.error("Fetch error details:", error);
    }
}

// --- BUTTON EVENT LISTENERS ---
document.getElementById("btnKuopio").onclick = () => {
    loadWeatherByCity("Kuopio", 62.8924, 27.6770);
};

document.getElementById("btnHelsinki").onclick = () => {
    loadWeatherByCity("Helsinki", 60.1699, 24.9384);
};

document.getElementById("btnOulu").onclick = () => {
    loadWeatherByCity("Oulu", 65.0121, 25.4651);
};
