// Get references to UI elements
const output = document.getElementById("output");
const statusText = document.getElementById("status");

// Helper function to print text
function log(message) {
    output.textContent += message + "\n";
}

// Helper function to clear output
function clearOutput() {
    output.textContent = "";
}

// Helper function to update status
function setStatus(text) {
    statusText.textContent = "Status: " + text;
}

/* ==========================================================
   1) ASYNC TIMEOUT
   ========================================================== */

document.getElementById("btnTimeout").onclick = function () {

    clearOutput();
    log("Start");

    // Task B: Change the timeout from 2000 ms to 500 ms.
    setTimeout(function () {
        log("Timeout finished after 500 ms"); 
    }, 500);

    log("End");
};

/* ==========================================================
   2) ASYNC PROMISE
   ========================================================== */

function waitOneSecond() {

    return new Promise(function (resolve) {

        // Task C2: Change the waiting time from 1000 ms to 2000 ms
        setTimeout(function () {
            // Task C1: Change the resolve message
            resolve("Promise resolved after 1 second!"); 
        }, 2000);
    });
}

document.getElementById("btnPromise").onclick = function () {

    clearOutput();
    setStatus("Waiting (Promise)...");

    waitOneSecond().then(function (result) {
        log(result);
        setStatus("Idle");
    });
};

/* ==========================================================
   3) ASYNC / AWAIT
   ========================================================== */

async function runAwaitExample() {

    clearOutput();
    // Task D1: Change status text
    setStatus("Please wait, async/await running...");

    // Task D2: Add logs before and after await
    log("Before await");
    const result = await waitOneSecond();
    log("After await");

    log(result);
    setStatus("Idle");
}

document.getElementById("btnAwait").onclick = runAwaitExample;

/* ==========================================================
   4) ASYNC FETCH (REAL WORLD)
   ========================================================== */

async function runFetchExample() {

    clearOutput();
    setStatus("Loading from API...");

    try {
        // Task E2: Change the URL to force an error
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/999999"
        );

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        // Task E1: Change what you display
        log("ID: " + data.id);
        log("Title: " + data.title);

    } catch (error) {
        log("Error: " + error.message);

    } finally {
        setStatus("Idle");
    }
}

document.getElementById("btnFetch").onclick = runFetchExample;
