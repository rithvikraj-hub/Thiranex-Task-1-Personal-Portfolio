const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running 🚀");
});

app.get("/projects", (req, res) => {
    res.json([
        {
            title: "AI Chatbot",
            description: "A chatbot built using Python"
        },
        {
            title: "Tic-Tac-Toe AI",
            description: "Game built using the Minimax algorithm"
        },
        {
            title: "Sales Forecasting",
            description: "Machine learning project for predicting sales"
        }
    ]);
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});