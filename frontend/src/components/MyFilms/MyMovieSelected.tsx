import styles from "../../styles/MyMovieSelected.module.css";
import { MovieTotalFromAPI } from "../../types/MovieTotalFromAPI";

type MyMovieSelectedProps = {
  movie: MovieTotalFromAPI;
};

function MyMovieSelected({ movie }: MyMovieSelectedProps) {
  return (
    <div
      className={styles.movieContainer}
      data-t='MyMovieSelected-movieContainer'
    >
      <div
        className={styles.movieCard}
        data-t='MyMovieSelected-movieCard'
      >
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
            alt={`image de ${movie.title_fr}`}
          />
        </div>
        <p data-t='MyMovieSelected-title'>Titre : {movie.title_fr}</p>
        <p data-t='MyMovieSelected-year'>Date de sortie : {movie.year}</p>
        <p data-t='MyMovieSelected-length'>Durée : {movie.length} minutes</p>
        <p data-t='MyMovieSelected-imdb_note'>Note imdb : {movie.imdb_note} / 10</p>
        <p data-t='MyMovieSelected-resume'>Résumé : {movie.resume}</p>
      </div>
    </div>
  );
}

export default MyMovieSelected;
