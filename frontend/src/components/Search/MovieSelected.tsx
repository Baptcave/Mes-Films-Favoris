import styles from "../../styles/MovieSelected.module.css";
import { MovieFromIMDB } from "../../types/MovieFromIMDB";

type MovieSelectedProps = {
  movieSelected: MovieFromIMDB;
};

function MovieSelected({ movieSelected }: MovieSelectedProps) {
  const movie = movieSelected;
  return (
    <div className={styles.movieContainer}>
      <div className={styles.movieCard}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`image de ${movie.title}`}
          />
        </div>
        <p>Titre : {movie.title}</p>
        <p>Date de sortie : {movie.release_date}</p>
        <p>Durée : {movie.runtime} minutes</p>
        <p>Note Imdb : {movie.vote_average} / 10</p>
        <p>Résumé : {movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieSelected;
