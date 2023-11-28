const { insertMovieIntoMovie, insertMovieIntoUserHasMovie, findAll, update, findOne, eraseFromUserHasMovies, eraseFromMovies } = require("../models/movieHandler.js");

const browse = async (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10);

        if (isNaN(userId)) return;

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

const edit = async (req, res) => {
    try {
        const userHasMovieId = req.params.id;
        const movieUpdate = req.body; 

        const result = await update(movieUpdate, userHasMovieId);
        
        if (result) {
            const [movie] = await findOne(movieUpdate.id_movie);

            res.status(201).send(movie);
        } else {
            res.status(500).send("Problem updating movie");
        }
    } catch(e) {
        res.status(500).send(e);
    }
};

const remove = async (req, res) => {
    try {
        const movieId = parseInt(req.params.id, 10);

        const [userHasMoviesResult] = await eraseFromUserHasMovies(movieId);

        if (userHasMoviesResult.affectedRows === 0) {
            res.sendStatus(404);
        } else {
            const [movieResult] = await eraseFromMovies(movieId);
            res.status(204).send("the movie has been deleted");
        }
    } catch(e) {
        res.status(500).send(e);
    }
};

module.exports = { add, browse, edit, remove };
