let clickCount = 0;
const myName = "Amrit Singh";
let isDarkMode = false;

console.log("Portfolio page loaded for: " + myName);

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-theme");
    console.log("Theme changed. Is Dark Mode active? " + isDarkMode);
}

function handleCounter() {
    clickCount++;
    console.log("Counter button clicked! Current count: " + clickCount);
    const btn = document.getElementById("count-btn");
    btn.textContent = `Clicks: ${clickCount}`;
}

document.getElementById("theme-btn").addEventListener("click", toggleTheme);
document.getElementById("count-btn").addEventListener("click", handleCounter);
