const output = document.getElementById("output");
const userList = document.getElementById("userList");

function log(text) {
    output.textContent += text + "\n";
}

function clearOutput() {
    output.textContent = "";
    userList.innerHTML = ""; // Clear the list too
}

document.getElementById("btnLoadUsers").onclick = loadUsers;

async function loadUsers() {
    clearOutput();
    log("Fetching users...");

    // Part C: Error Handling with try/catch
    try {
        // Part A: Fetch Data
        // Change "users" to "userssss" to test the error handling in Part D
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Part C: Check HTTP Status
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();
        log("Data received successfully. Processing " + data.length + " users...\n");

        // Part B & E: Loop through users
        data.forEach(function(user) {
            // Accessing nested fields (user.address.city)
            const name = user.name;
            const email = user.email;
            const city = user.address.city;

            const userInfo = `${name} - ${email} - ${city}`;

            // Log to the <pre> area
            log(userInfo);

            // Part E: Add to the Webpage <ul>
            const li = document.createElement("li");
            li.textContent = userInfo;
            userList.appendChild(li);
        });

    } catch (error) {
        // Part D: This runs if the URL is wrong or network is down
        log("Error: " + error.message);
        console.error("Fetch failure:", error);
    }
}
