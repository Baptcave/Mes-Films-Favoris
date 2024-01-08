import { Request, Response } from "express";
import { Movie } from "../types/Movie";
import { MovieComment } from "../types/MovieComment";
import { MovieUpdate } from "../types/MovieUpdate";

const { insertMovieIntoMovie, insertMovieIntoUserHasMovie, findAll, update, findOne, eraseFromUserHasMovies, eraseFromMovies } = require("../models/movieHandler.ts");

const browse = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id, 10);

        if (isNaN(userId)) return;

        const movies: Movie[] = await findAll(userId as number);

        res.send(movies);
    } catch(e) {
        res.sendStatus(500);
    }
}

const add = async (req: Request, res: Response) => {
    try {
        const myMovieComment: MovieComment = req.body;

        const movieResult = await insertMovieIntoMovie(myMovieComment);

        const movieInsertId: number = movieResult.insertId;

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

const edit = async (req: Request, res: Response) => {
    try {
        const userHasMovieId: number = parseInt(req.params.id, 10);
        const movieUpdate: MovieUpdate = req.body; 

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

const remove = async (req: Request, res: Response) => {
    try {
        const movieId: number = parseInt(req.params.id, 10);

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
