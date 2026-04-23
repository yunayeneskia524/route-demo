const express = require('express');
const app = express();
const PORT = 3000;

// 🔹 Middleware Logger (Langkah 4)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// 🔹 Route Home
app.get('/', (req, res) => {
    res.send("Welcome to Route Handling!");
});

// 🔹 Route About
app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1>");
});

// 🔹 Dynamic Route (Product ID)
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Viewing Product ID: ${id}`);
});

// 🔹 Query String Route
app.get('/search', (req, res) => {
    const term = req.query.q;
    res.send(`Searching for: ${term}`);
});

// 🔹 404 Handler
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// 🔹 Jalankan server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});