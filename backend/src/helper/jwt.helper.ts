const jwt = require("jsonwebtoken");
import { UserToAPI } from "../types/UserToAPI";

const encodeJWT = (payload: UserToAPI) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const decodeJWT = (token: string) => {
    return jwt.decode(token, process.env.JWT_SECRET);
};

module.exports = { encodeJWT, decodeJWT };
