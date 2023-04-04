import React, { useState } from 'react';
import axios from "axios";
import Nav from '../components/Nav';
import SearchAPI from '../components/Search/SearchAPI';
import MovieSelected from '../components/Search/MovieSelected';
import Comment from '../components/Search/Comment';
import styles from "../styles/SearchPage.module.css"

function Search() {
  const [movieSelected, setMovieSelected] = useState({});

  const key = import.meta.env.VITE_API_KEY;

  const handleOneMovie = (e) => {
    const movie_id = parseInt(e.target.id, 10);
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=fr-FR`)
    .then((res) => {
      // console.log("Movie selected", res.data);
      setMovieSelected(res.data)
    })
    .catch((err) => console.error(err))
  };

  return (
    <div>
      <Nav />
      <div className={styles.gridContainer}>
        <SearchAPI handleOneMovie={handleOneMovie} />
        {Object.keys(movieSelected).length !== 0 && <MovieSelected movieSelected={movieSelected} />}
        {Object.keys(movieSelected).length !== 0 && <Comment />}
      </div>
    </div>
  )
};

export default Search;