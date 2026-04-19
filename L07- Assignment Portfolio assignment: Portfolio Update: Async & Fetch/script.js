// 1. Theme Persistence
const themeBtn = document.getElementById('theme-toggle');
if (localStorage.getItem('portfolio_theme') === 'dark') {
    document.body.classList.add('dark');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('portfolio_theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// 2. Auto Date
document.getElementById('last-updated').innerText = `Last updated: ${new Date().toISOString().split('T')[0]}`;

// 3. API Fetch (Assignment 7)
// Why async/await? To make asynchronous code look synchronous and easier to read.
// Why response.ok? To check if the HTTP status is successful (200 range).
// Why try/catch? To catch network errors without crashing the page.

async function loadUserData() {
    const resDiv = document.getElementById("api-result");
    resDiv.innerHTML = "<em>Loading...</em>";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) throw new Error("Status: " + response.status);
        const data = await response.json();
        resDiv.innerHTML = `<p><strong>Name:</strong> ${data.name}</p>
                            <p><strong>Email:</strong> ${data.email}</p>
                            <p><strong>Company:</strong> ${data.company.name}</p>`;
    } catch (err) {
        resDiv.innerHTML = "<p style='color:red;'>Error fetching data.</p>";
    }
}
document.getElementById("load-data-btn").addEventListener("click", loadUserData);
