/* ==========================================================
   External Data Demo — Fetch API logic
   ========================================================== */

const loadBtn = document.getElementById("load-data-btn");
const apiResult = document.getElementById("api-result");

// why do we use async/await? 
// It allows us to write asynchronous code that reads like synchronous code, 
// making it easier to read and maintain than complex promise chains.

// why do we check response.ok? 
// Because the fetch() promise only rejects on network failure. 
// It will still "succeed" if the server returns a 404 or 500 error, 
// so we must manually check this property to ensure the data is actually there.

// why do we use try/catch? 
// It provides a clean way to handle both network errors and any manual errors 
// we throw (like an unsuccessful response.ok), preventing the script from crashing.

async function fetchExternalData() {
    // Show a temporary loading message
    apiResult.innerHTML = "<p><em>Loading...</em></p>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        // Check if the response was successful
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // Convert the data to JSON
        const data = await response.json();

        // Update the DOM dynamically
        apiResult.innerHTML = `
            <div class="user-card">
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Company:</strong> ${data.company.name}</p>
            </div>
        `;

    } catch (error) {
        // Handle and display error message
        console.error("Fetch error:", error);
        apiResult.innerHTML = `<p style="color: crimson;">Error loading data.</p>`;
    }
}

// Attach the event listener to the button
loadBtn.addEventListener("click", fetchExternalData);
