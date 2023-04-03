const { findAll, insert } = require("../models/userHandler.js");

const browse = async (req, res) => {
    try {
        const users = await findAll();

        res.send(users);
    } catch(e) {
        res.sendStatus(500);
    }
};

const add = async (req, res) => {
    try {
        const user = req.body;

        const result = await insert(user);

        res.status(201).send(result);
    } catch(e) {
        res.sendStatus(500);
    }
};

module.exports = { browse, add };