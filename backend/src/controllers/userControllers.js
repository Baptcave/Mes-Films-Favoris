const { findAll, insert } = require("../models/userHandler.js");
const validateUser = require("../validator/user.validator.js");

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
        const errors = validateUser(req.body, true);

        if (errors) return res.status(400).send(errors);

        const user = req.body;

        const result = await insert(user);

        if (result) {
            res.status(201).send(result);
        } else {
            res.status(500).send("Problem creating new user");
        }
    } catch(e) {
        res.sendStatus(500);
    }
};

module.exports = { browse, add };