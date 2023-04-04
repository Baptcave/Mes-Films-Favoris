const db = require("./db.js");

const insertMovieIntoMovie = async (myMovieComment) => {
    try {
        const [result] = await db.query("INSERT INTO `movie` (title_fr, length, year, imdb_note, poster, resume) VALUES (?, ?, ?, ?, ?, ?)", 
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
        const [result] = await db.query("INSERT INTO `user_has_movies` (date_seen, mode_seen, my_note, comment, id_user, id_movie) VALUES (?, ?, ?, ?, ?, ?)", 
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

module.exports = { insertMovieIntoMovie, insertMovieIntoUserHasMovie };