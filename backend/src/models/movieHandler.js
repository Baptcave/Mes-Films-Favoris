const db = require("./db.js");

const insertMovieIntoMovie = async (myMovieComment) => {
    try {
        const [result] = await db.query(
            "INSERT INTO `movie` (title_fr, length, year, imdb_note, poster, resume) VALUES (?, ?, ?, ?, ?, ?)", 
        [
            myMovieComment.title, 
            myMovieComment.runtime,
            myMovieComment.release_date,
            myMovieComment.vote_average,
            myMovieComment.poster_path,
            myMovieComment.overview,
        ]);

        return result;
    } catch(e) {
        console.error(e);
    }
}

const insertMovieIntoUserHasMovie = async (myMovieComment, movieId) => {
    try {
        const [result] = await db.query(
            "INSERT INTO `user_has_movies` (date_seen, mode_seen, my_note, comment, id_user, id_movie) VALUES (?, ?, ?, ?, ?, ?)", 
        [
            myMovieComment.date_seen, 
            myMovieComment.mode_seen,
            myMovieComment.my_note,
            myMovieComment.comment,
            myMovieComment.userId,
            movieId,
        ]);

        return result;
    } catch(e) {
        console.error(e);
    }
}

const findAll = async (userId) => {
    try {
        const [movies] = await db.query(
            "SELECT * FROM `movie` AS m INNER JOIN `user_has_movies` AS um ON um.id_movie=m.id WHERE um.id_user = ?;", [userId]);

        return movies;
    } catch(e) {
        console.error(e);
    }
}

const update = async (movie, id) => {
    try {
    const [result] = await db.query(
        "UPDATE `user_has_movies` SET date_seen = ?, mode_seen = ?, my_note = ?, comment = ? WHERE id = ?",
    [
        movie.date_seen,
        movie.mode_seen,
        movie.my_note,
        movie.comment,
        id
    ]);

    return result;
    } catch(e) {
        console.error(e);
    }
}

const findOne = async (id) => {
    try {
        const [movie] = await db.query(
            "SELECT * FROM `movie` AS m INNER JOIN `user_has_movies` AS um ON um.id_movie=m.id WHERE um.id_movie = ?;", [id]);

        return movie;
    } catch(e) {
        console.error(e);
    }
}

const eraseFromUserHasMovies = async (id) => {
    try {
        const result = await db.query("DELETE FROM `user_has_movies` AS um WHERE um.id_movie = ?", [id]);

        return result;
    } catch(e) {
        console.error(e);
    }
}

const eraseFromMovies = async (id) => {
    try {
        const result = await db.query("DELETE FROM `movie` WHERE id = ?;", [id]);

        return result;
    } catch(e) {
        console.error(e);
    }
}

module.exports = {
    insertMovieIntoMovie,
    insertMovieIntoUserHasMovie,
    findAll,
    update,
    findOne,
    eraseFromUserHasMovies,
    eraseFromMovies
};