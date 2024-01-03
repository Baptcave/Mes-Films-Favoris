import styles from "../../styles/MyMovieSelected.module.css";

function MyMovieSelected({ movie }) {
  return (
    <div className={styles.movieContainer}>
      <div className={styles.movieCard}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
            alt={`image de ${movie.title_fr}`}
          />
        </div>
        <p>Titre : {movie.title_fr}</p>
        <p>Date de sortie : {movie.year}</p>
        <p>Durée : {movie.length} minutes</p>
        <p>Note imdb : {movie.imdb_note} / 10</p>
        <p>Résumé : {movie.resume}</p>
      </div>
    </div>
  );
}

export default MyMovieSelected;
