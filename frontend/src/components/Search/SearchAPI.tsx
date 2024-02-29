import { useState } from "react";
import axios from "axios";
import styles from "../../styles/SearchAPI.module.css";
import { MovieFromIMDB } from "../../types/MovieFromIMDB";

type SearchAPIProps = {
  handleOneMovie: (e: React.MouseEvent<HTMLElement>) => void;
};

function SearchAPI({ handleOneMovie }: SearchAPIProps) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<MovieFromIMDB[]>([]);

  const key = process.env.VITE_API_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=fr-FR&query=${query}&page=1&include_adult=false`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type='text'
        name='search'
        id='search'
        placeholder='Rechercher...'
      />
      <button
        type='button'
        onClick={handleMovies}
      >
        Envoyer
      </button>
      <div className={styles.allMoviesContainer}>
        {movies.map((movie) => (
          <button
            key={movie.id}
            type='button'
            onClick={handleOneMovie}
            className={styles.movieContainer}
          >
            <div
              className={styles.fakeDivToClick}
              id={movie.id}
            ></div>
            <p>Titre : {movie.title}</p>
            <p>Date de sortie : {movie.release_date}</p>
            <p>Note IMDB : {movie.vote_average}</p>
            <p>Résumé : {movie.overview}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchAPI;
