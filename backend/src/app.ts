require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
import { Request, Response } from 'express';

const app = express();

const router = require("./router");

const { CORS_ALLOWED_ORIGINS } = process.env;

app.use(cors({
    origin: CORS_ALLOWED_ORIGINS?.split(","),
    credentials: true, // pour pouvoir travailler avec un token dans le header des requêtes ou des cookies
    optionsSuccessStatus: 200,
}));

app.use(cookieParser());
app.use("/", router);

app.get("*", (req: Request, res: Response) => {
    res.status(404).json({ message: "Not Found !" });
}); // si n'importe quelle route qui n'a pas été définie est appelée, elle renverra 404 et le message.

module.exports = app;
