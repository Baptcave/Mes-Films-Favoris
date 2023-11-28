require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const router = require("./router");

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true, // pour pouvoir travailler avec un token dans le header des requêtes ou des cookies
    optionsSuccessStatus: 200,
}));

app.use(cookieParser());
app.use("/", router);

app.get("*", (req, res) => {
    res.status(404).json({ message: "Not Found !" });
}); // si n'importe quelle route qui n'a pas été définie est appelée, elle renverra 404 et le message.

module.exports = app;
