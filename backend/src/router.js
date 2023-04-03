const express = require("express");

const router = express.Router();

router.use(express.json());

const { hashPassword, verifyToken } = require("./auth");

const authControllers = require("./controllers/authControllers");

router.post("/login", authControllers.login);
router.get("/logout", authControllers.logout);

const userControllers = require("./controllers/userControllers");

router.post("/users", hashPassword, userControllers.add);

// Protected routes
router.use(verifyToken);

router.get("/users", userControllers.browse);

module.exports = router;