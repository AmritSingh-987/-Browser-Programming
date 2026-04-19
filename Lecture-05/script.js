// --- Task 3 & 4: Theme Toggle & LocalStorage ---
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check localStorage on load
const savedTheme = localStorage.getItem('portfolio_theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Save preference
    if (body.classList.contains('dark')) {
        localStorage.setItem('portfolio_theme', 'dark');
    } else {
        localStorage.setItem('portfolio_theme', 'light');
    }
});

// --- Task 5: Last Updated Date ---
window.onload = function() {
    const dateElement = document.getElementById('last-updated');
    const today = new Date();
    
    // Format as YYYY-MM-DD
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    dateElement.innerText = `Last updated: ${year}-${month}-${day}`;
};
