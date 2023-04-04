const { insertMovieIntoMovie, insertMovieIntoUserHasMovie } = require("../models/movieHandler.js");

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


module.exports = { add };