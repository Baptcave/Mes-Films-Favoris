import React from "react";
import styles from "../../styles/SearchMine.module.css";

function SearchMine({ userId, handleOneMovie, movies }) {
  //   const [query, setQuery] = useState("");
  
  //   const handleChange = (e) => {
  //     setQuery(e.target.value);
  //   };

  return (
    <div>
      {/* <input
        onChange={handleChange}
        type="text"
        name="search"
        id="search"
        placeholder="Rechercher..."
      /> */}
      <div className={styles.allMoviesContainer}>
        {movies.map((movie) => (
          <button
            key={movie.id_movie}
            type="button"
            onClick={handleOneMovie}
            className={styles.movieContainer}
          >
            <div className={styles.fakeDivToClick} id={movie.id_movie}></div>
            <div className={styles.imageContainer}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster}`} className={styles.image} />
            </div>
            <p>Note : {movie.my_note}</p>
            <p>Date : {movie.date_seen}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchMine;
