import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Header</h1>");
});

app.get("/contact", (req, res) => {
    res.send("86686886");
});

app.get("/about", (req, res) => {
    res.send("<p>Turn up them thrusters</p>");
});

app.listen(port, () => {
    console.log(`Server running on ${port}.`);
});