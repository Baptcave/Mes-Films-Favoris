import React, { useState } from "react";
import formateDate from "../../services/dateFormat";
import styles from "../../styles/SearchMine.module.css";
import { MovieTotalFromAPI } from "../../types/MovieTotalFromAPI";

function SearchMine({ handleOneMovie, movies }) {
  const [query, setQuery] = useState("");

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleQuery}
        type="text"
        name="search"
        id="search"
        placeholder="Titre"
      />
      <div className={styles.allMoviesContainer}>
        {movies
          .filter((elem: MovieTotalFromAPI) =>
            elem.title_fr.toLowerCase().includes(query.toLowerCase())
          )
          .map((movie: MovieTotalFromAPI) => (
            <button
              key={movie.id_movie}
              type="button"
              onClick={handleOneMovie}
              className={styles.movieContainer}
            >
              <div
                className={styles.fakeDivToClick}
                id={movie.id_movie.toString()}
              ></div>
              <div className={styles.imageContainer}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                  className={styles.image}
                />
              </div>
              <p>Ma note : {movie.my_note}</p>
              <p>Date de visionnage : {formateDate(movie.date_seen)}</p>
            </button>
          ))}
      </div>
    </div>
  );
}

export default SearchMine;
