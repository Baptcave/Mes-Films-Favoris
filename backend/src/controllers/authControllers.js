const { findByMail } = require("../models/userHandler.js");
const { verifyPassword } = require("../auth.js");
const { encodeJWT } = require("../helper/jwt.helper.js");

const login = async (req, res) => {
    const [user] = await findByMail(req.body.mail);
     
    if (!user) return res.status(401).send("Invalid Credentials");

    const passwordVerification = await verifyPassword(user.password, req.body.password);

    if (!passwordVerification) return res.status(401).send("Invalid Credentials");

    delete user.password;

    const token = encodeJWT(user);

    res.cookie("auth_token", token, { httpOnly: true, secure: false, });

    res.status(200).json({userId: user.id, firstname: user.firstname});
};

const logout = async (req, res) => {
    res.clearCookie("auth_token").sendStatus(200);
};

module.exports = { login, logout };