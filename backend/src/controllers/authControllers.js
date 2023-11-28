const { findByMail } = require("../models/userHandler.js");
const { verifyPassword } = require("../auth.js");
const { encodeJWT } = require("../helper/jwt.helper.js");
const validateLogin = require("../validator/login.validator.js");

const login = async (req, res) => {
    try {
        const errors = validateLogin(req.body);
    
        if (errors) return res.status(400).send(errors);
    
        const [user] = await findByMail(req.body.mail);
    
        if (!user) return res.status(401).send("Invalid Credentials");
    
        const passwordVerification = await verifyPassword(user.password, req.body.password);
    
        if (!passwordVerification) return res.status(401).send("Invalid Credentials");
    
        delete user.password;
    
        const token = encodeJWT(user);
    
        res.cookie("auth_token", token, { httpOnly: true, secure: false, });
        // pas forcément une bonne pratique de garder un nom de cookie explicite
        // httpOnly à true pour être sûr qu'on ne puisse pas manipuler le cookie en JS côté front
        // si secure était true, le cookie ne serait renvoyé que pour les requêtes par https
    
        res.status(200).json({userId: user.id, firstname: user.firstname});
    } catch(e) {
        res.sendStatus(500);
    }
};

const logout = async (req, res) => {
    res.clearCookie("auth_token").sendStatus(200);
};

module.exports = { login, logout };
