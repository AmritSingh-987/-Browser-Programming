# Lecture 07 — REST API Fetch
**Student:** Amrit Singh  
**Course:** Browser Programming

## 📝 Project Overview
This project demonstrates how to interact with a real-world REST API using modern JavaScript techniques. The application fetches a list of 10 users from the JSONPlaceholder API and displays their information dynamically on the page.

## 🚀 Key Features
* **Asynchronous Logic**: Implemented using `async/await` for readable, non-blocking code.
* **Nested Data Handling**: Correctiously accessed nested JSON objects (e.g., `user.address.city`).
* **Dynamic UI**: Updates the DOM in real-time by creating list items (`<li>`) for each user.
* **Error Resilience**: Includes a `try/catch` block and checks `response.ok` to handle potential network or HTTP errors.

## 🧠 Part F: Short Reflection

**1. What does fetch() return?** `fetch()` returns a **Promise** that eventually resolves into a **Response object**. This object contains the HTTP status, headers, and metadata, but the actual data (the body) must be parsed separately.

**2. Why do we use response.json()?** The data sent from a server is usually a raw stream of text. We use `response.json()` to asynchronously read that stream to completion and parse it into a standard **JavaScript object or array** that we can easily manipulate.

**3. Why must we check response.ok?** The `fetch` promise only rejects if there is a network failure (like
