# Lecture 07 — Weather Dashboard
**Student:** Amrit Singh  
**Course:** Browser Programming - Savonia UAS

## 🌦️ Project Overview
This application is a dynamic weather dashboard that retrieves real-time meteorological data from the **Open-Meteo API**. It demonstrates the ability to handle multiple API endpoints using a single, reusable asynchronous function.

## 🚀 Implemented Features
* **Multi-City Support**: Buttons for **Kuopio**, **Helsinki**, and **Oulu** that load data based on specific GPS coordinates.
* **Reusable Logic**: A single `loadWeatherByCity(name, lat, lon)` function handles all requests, adhering to the DRY (Don't Repeat Yourself) principle.
* **Live Timestamp**: Displays the exact time the weather data was recorded by the API.
* **Dynamic UI Styling**: The background color of the page changes automatically based on the temperature:
    * **Cold (< 0°C)**: Light Blue background.
    * **Mild (≥ 0°C)**: Light Yellow background.
* **Error Handling**: Uses `try/catch` and `response.ok` checks to manage network or API issues gracefully.

## 🧠 Short Reflection

**1. Why is this page called dynamic?** The page is dynamic because the information displayed is not hardcoded into the HTML. Instead, the UI updates "on the fly" by fetching fresh data from an external server every time the user interacts with a button.

**2. What does the API give us?** The API provides a structured **JSON response** containing raw weather variables (temperature, wind speed, timestamp) mapped to the specific latitude and longitude coordinates we requested.

**3. Why is JSON useful here?** JSON is useful because it is a lightweight, text-based format that JavaScript can easily parse into objects. It allows the API to send complex, nested data that we can access simply using "dot notation" (e.g., `data.current.temperature_2m`).

**4. Why is it better to create one reusable function for all cities?** It is better for **maintainability and scalability**. Instead of writing 30 lines of code for every new city, we write the logic once. This makes it easier to fix bugs, update the API URL, or add 100 more cities by simply changing the function arguments.

## 📸 Dashboard Preview
![Weather Dashboard Screenshot](weather_screenshot.png)

---
### 🛠️ How to Use
1. Open `index.html` in your browser.
2. Click on any city button at the top.
3. Observe the data update and the background color change based on the local temperature.
