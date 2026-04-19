/* ==========================================================
   1. THEME TOGGLE & PERSISTENCE (L05)
   ========================================================== */
const themeBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('portfolio_theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('portfolio_theme', mode);
});

/* ==========================================================
   2. AUTOMATIC LAST UPDATED (L05)
   ========================================================== */
const dateDisplay = document.getElementById('last-updated');
const now = new Date();
dateDisplay.innerText = `Last updated: ${now.toISOString().split('T')[0]}`;

/* ==========================================================
   3. EXTERNAL DATA FETCH (Assignment 7)
   ========================================================== */

// WHY DO WE USE ASYNC/AWAIT? 
// It allows us to handle asynchronous operations (like fetching data) in a way 
// that looks synchronous, making the code much cleaner and easier to read.

// WHY DO WE CHECK RESPONSE.OK? 
// Fetch only fails on network errors. If the server sends a 404 (Not Found), 
// fetch still "succeeds." Checking response.ok ensures the data actually arrived.

// WHY DO WE USE TRY/CATCH? 
// It prevents the whole application from crashing if the network is down 
// or the API is broken, allowing us to show a friendly error message instead.

async function loadExternalData() {
    const resultDiv = document.getElementById("api-result");
    resultDiv.innerHTML = "<p><em>Loading...</em></p>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("HTTP Error! Status: " + response.status);
        }

        const user = await response.json();

        // Dynamically update the DOM with Name, Email, and Company
        resultDiv.innerHTML = `
            <div style="line-height: 1.8">
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            </div>
        `;

    } catch (error) {
        resultDiv.innerHTML = "<p style='color:red;'>Error loading data. Please try again later.</p>";
        console.error("API Error:", error);
    }
}

document.getElementById("load-data-btn").addEventListener("click", loadExternalData);
   
