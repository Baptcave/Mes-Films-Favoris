require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const router = require("./router");

app.use(cookieParser());
app.use("/", router);

app.get("*", (req, res) => {
    res.status(404).json({ message: "Not Found !" });
});

module.exports = app;