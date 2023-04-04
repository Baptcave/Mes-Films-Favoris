import React, { useState, useEffect } from "react";
import filmAPI from "../services/filmAPI";
import { toastError, toastValidation } from "../services/toastService";

import styles from "../styles/MyFilmsPage.module.css";

import Nav from "../components/Nav";
import SearchMine from "../components/MyFilms/SearchMine";
import MyMovieSelected from "../components/MyFilms/MyMovieSelected";
import ModifyComment from "../components/MyFilms/ModifyComment";
import MyComment from "../components/MyFilms/MyComment";
import ConfirmDelete from "../components/MyFilms/ConfirmDelete";

function MyFilms() {
  const userId = JSON.parse(localStorage.getItem("userId"));

  const [movies, setMovies] = useState([]);
  const [movieSelected, setMovieSelected] = useState({});
  const [beingModified, setBeingModified] = useState(false);
  const [confirmDeleteIsDisplay, setConfirmDeleteIsDisplay] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState(null);

  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    filmAPI
      .get(`/movies/${userId}`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
  }, [beingModified]);

  const handleOneMovie = (e) => {
    const movieId = parseInt(e.target.id, 10);
    setMovieSelected(movies.filter((movie) => movie.id_movie === movieId)[0]);
  };

  const handleModify = () => {
    setBeingModified(!beingModified);
  };

  const handleToggleDelete = (e) => {
    setMovieToDelete(parseInt(e.target.id, 10));
    setConfirmDeleteIsDisplay((prev) => !prev);
  };

  const confirmSuppression = () => {
    filmAPI.delete(`/movies/${movieToDelete}`)
      .then((res) => {
        setBeingModified(!beingModified);
        setConfirmDeleteIsDisplay((prev) => !prev);
        setMovieSelected({});
        toastValidation("Votre film a bien été supprimé 🙌");
      })
      .catch((err) => {
        console.error(err);
        toastError("Problème ? BaptGeek est sur le coup... 🤓")
      });
  };

  return (
    <div className={styles.globalContainer}>
      {confirmDeleteIsDisplay && (
        <div className={styles.fakeDiv}>
          <ConfirmDelete
            handleToggleDelete={handleToggleDelete}
            confirmSuppression={confirmSuppression}
          />
        </div>
      )}
      <div className={styles.underConfirmDelete}>
        <div className={styles.navbar}>
          <Nav />
        </div>
        {movies.length === 0 && <p>Vous n'avez aucun film favori. Vous pouvez commencer à en chercher pour les ajouter ici.</p>}
        <div className={styles.gridContainer}>
          <SearchMine
            userId={userId}
            handleOneMovie={handleOneMovie}
            movies={movies}
          />
          {Object.keys(movieSelected).length !== 0 && (
            <MyMovieSelected movie={movieSelected} />
          )}
          {Object.keys(movieSelected).length !== 0 && beingModified && (
            <ModifyComment
              movie={movieSelected}
              setBeingModified={setBeingModified}
              setMovieSelected={setMovieSelected}
            />
          )}
          {Object.keys(movieSelected).length !== 0 && !beingModified && (
            <MyComment
              movie={movieSelected}
              handleModify={handleModify}
              handleToggleDelete={handleToggleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MyFilms;
