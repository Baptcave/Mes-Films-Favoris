import React, { useState } from 'react';
import axios from "axios";
import filmAPI from "../services/filmAPI";
import { useUserContext } from "../contexts/UserContext";
import { toastError, toastValidation } from "../services/toastService";

import Nav from '../components/Nav';
import SearchAPI from '../components/Search/SearchAPI';
import MovieSelected from '../components/Search/MovieSelected';
import Comment from '../components/Search/Comment';
import styles from "../styles/SearchPage.module.css"

function Search() {
  const { userId } = useUserContext();

  const [movieSelected, setMovieSelected] = useState({});
  const [myComments, setMyComments] = useState({});

  const key = import.meta.env.VITE_API_KEY;

  const handleOneMovie = (e) => {
    const movie_id = parseInt(e.target.id, 10);
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=fr-FR`)
    .then((res) => {
      setMovieSelected(res.data)
    })
    .catch((err) => console.error(err))
  };

  const handleClick = () => {
    console.log(userId);
    const myMovieComment = {userId, ...movieSelected, ...myComments};
    console.log(myMovieComment);
    if (myComments) {
      filmAPI
        .post("/movies", myMovieComment)
        .then((res) => toastValidation(`Votre film a bien été enregistré 🙂`))
        .catch((err) => {
          console.error(err);
          toastError("Oupsi ! Êtes-vous sûr de vos informations ?");
        });
    } else {
        toastError("Vous n'avez rien sélectionné")
    }
  };

  return (
    <div>
      <Nav />
      <div className={styles.gridContainer}>
        <SearchAPI handleOneMovie={handleOneMovie} />
        {Object.keys(movieSelected).length !== 0 && <MovieSelected movieSelected={movieSelected} />}
        {Object.keys(movieSelected).length !== 0 && <Comment myComments={myComments} setMyComments={setMyComments} handleClick={handleClick} />}
      </div>
    </div>
  )
};

export default Search;