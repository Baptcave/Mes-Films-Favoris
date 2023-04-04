const { insertMovieIntoMovie, insertMovieIntoUserHasMovie, findAll } = require("../models/movieHandler.js");

const browse = async (req, res) => {
    try {
        const userId = req.params.id;

        const movies = await findAll(userId);

        res.send(movies);
    } catch(e) {
        res.sendStatus(500);
    }
}

const add = async (req, res) => {
    try {
        const myMovieComment = req.body;

        const movieResult = await insertMovieIntoMovie(myMovieComment);

        const movieInsertId = movieResult.insertId;

        const userMovieResult = await insertMovieIntoUserHasMovie(myMovieComment, movieInsertId);

        if (userMovieResult) {
            res.status(201).send(userMovieResult);
        } else {
            res.status(500).send("Problem creating new user_has_movies");
        }
    } catch(e) {
        res.status(500).send(e);
    }
};


module.exports = { add, browse };