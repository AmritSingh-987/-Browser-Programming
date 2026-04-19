const cityText = document.getElementById("city");
const tempText = document.getElementById("temperature");
const windText = document.getElementById("wind");
const timeText = document.getElementById("time");
const output = document.getElementById("output");

function log(msg) { output.textContent += `> ${msg}\n`; }

async function loadWeather(cityName, lat, lon) {
    output.textContent = "Connecting to API...\n";
    
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`;
        const response = await fetch(url);

        if (!response.ok) throw new Error("HTTP error " + response.status);

        const data = await response.json();
        const temp = data.current.temperature_2m;

        // --- BACKGROUND UPDATE LOGIC ---
        // Setting className directly clears any previous weather classes
        if (temp < 0) {
            document.body.className = "cold";
        } else if (temp >= 0 && temp <= 20) {
            document.body.className = "mild";
        } else {
            document.body.className = "hot";
        }

        // Update Text
        cityText.textContent = cityName;
        tempText.textContent = temp + " °C";
        windText.textContent = data.current.wind_speed_10m + " km/h";
        timeText.textContent = data.current.time.replace("T", " ");

        log(`Successfully loaded ${cityName}`);
        log(`Temperature: ${temp}°C`);

    } catch (err) {
        log("Error: " + err.message);
        document.body.className = ""; // Reset to white on error
    }
}

// Button Assignments
document.getElementById("btnKuopio").onclick = () => loadWeather("Kuopio", 62.8924, 27.6770);
document.getElementById("btnHelsinki").onclick = () => loadWeather("Helsinki", 60.1699, 24.9384);
document.getElementById("btnOulu").onclick = () => loadWeather("Oulu", 65.0121, 25.4651);
