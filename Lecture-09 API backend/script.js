function fetchData(endpoint, elementId) {
  const output = document.getElementById(elementId);
  
  // BONUS: Add loading text
  output.innerHTML = "<em>⌛ Loading data from server...</em>";

  fetch(`http://localhost:3000${endpoint}`)
    .then(response => {
      if (!response.ok) throw new Error("Server error: " + response.status);
      return response.json();
    })
    .then(data => {
      // BONUS: Format the display nicely
      output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      // BONUS: Add a visual error message
      output.innerHTML = `<span style="color: red;">❌ Error: ${error.message}. Is your server.js running?</span>`;
    });
}