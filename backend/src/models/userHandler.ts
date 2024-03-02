const db = require("./db");
import { UserToAPI } from "../types/UserToAPI";

const findAll = async () => {
    try {
        const [users] = await db.query("SELECT * FROM `user`;");

        return users;
    } catch(e) {
        console.error(e);
    }
}

const findByMail = async (mail: Pick<UserToAPI, "mail">) => {
    try {
        const [user] = await db.query("SELECT * FROM `user` WHERE mail = ?;", [mail]);

        return user;
    } catch(e) {
        console.error(e);
    }
}

const insert = async (user: Omit<UserToAPI, "confirm_password">) => {
    try {
        const [result] = await db.query("INSERT INTO `user` (firstname, lastname, age, city, country, mail, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
            user.firstname,
            user.lastname,
            user.age,
            user.city,
            user.country,
            user.mail,
            user.password
        ]);

        return result;
    } catch(e) {
        console.error(e);
    }
}

module.exports = { findAll, insert, findByMail };
