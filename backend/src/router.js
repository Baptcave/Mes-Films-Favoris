const express = require("express");

const router = express.Router();

router.use(express.json());

const { hashPassword, verifyToken } = require("./auth");

const authControllers = require("./controllers/authControllers");

router.post("/login", authControllers.login);

const userControllers = require("./controllers/userControllers");
const movieControllers = require("./controllers/movieControllers");

router.post("/users", hashPassword, userControllers.add);

// Protected routes
router.use(verifyToken);

router.get("/users", userControllers.browse);

router.post("/movies", movieControllers.add);
router.get("/movies/:id", movieControllers.browse);
router.put("/movies/:id", movieControllers.edit);
router.delete("/movies/:id", movieControllers.remove);

router.get("/logout", authControllers.logout);

module.exports = router;