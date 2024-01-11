import { useState, useEffect } from "react";
import filmAPI from "../services/filmAPI";
import { toastError, toastValidation } from "../services/toastService";

import styles from "../styles/MyFilmsPage.module.css";

import Nav from "../components/Nav";
import SearchMine from "../components/MyFilms/SearchMine";
import MyMovieSelected from "../components/MyFilms/MyMovieSelected";
import ModifyComment from "../components/MyFilms/ModifyComment";
import MyComment from "../components/MyFilms/MyComment";
import ConfirmDelete from "../components/MyFilms/ConfirmDelete";
import { MovieTotalFromAPI } from "../types/MovieTotalFromAPI";

function MyFilms() {
  const userId = localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId") as string)
    : null;

  const [movies, setMovies] = useState<MovieTotalFromAPI[]>([]);
  const [movieSelected, setMovieSelected] = useState<MovieTotalFromAPI>();
  const [beingModified, setBeingModified] = useState(false);
  const [confirmDeleteIsDisplay, setConfirmDeleteIsDisplay] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState<number | null>(null);

  useEffect(() => {
    filmAPI
      .get(`/movies/${userId}`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
  }, [beingModified]);

  const handleOneMovie = (e: React.MouseEvent<HTMLElement>) => {
    const movieId = parseInt((e.target as any).id, 10);
    setMovieSelected(movies.filter((movie) => movie.id_movie === movieId)[0]);
  };

  const handleModify = () => {
    setBeingModified(!beingModified);
  };

  const handleToggleDelete = (e: React.MouseEvent<HTMLElement>) => {
    setMovieToDelete(parseInt((e.target as any).id, 10));
    setConfirmDeleteIsDisplay((prev) => !prev);
  };

  const confirmSuppression = () => {
    filmAPI
      .delete(`/movies/${movieToDelete}`)
      .then(() => {
        setBeingModified(!beingModified);
        setConfirmDeleteIsDisplay((prev) => !prev);
        setMovieSelected(undefined);
        toastValidation("Votre film a bien été supprimé 🙌");
      })
      .catch((err) => {
        console.error(err);
        toastError("Problème ? BaptGeek est sur le coup... 🤓");
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
        {movies.length === 0 && (
          <p>
            Vous n'avez aucun film favori. Vous pouvez commencer à en chercher pour les ajouter ici.
          </p>
        )}
        <div className={styles.gridContainer}>
          <SearchMine
            handleOneMovie={handleOneMovie}
            movies={movies as MovieTotalFromAPI[]}
          />
          {movieSelected && <MyMovieSelected movie={movieSelected} />}
          {movieSelected && beingModified && (
            <ModifyComment
              movie={movieSelected}
              setBeingModified={setBeingModified}
              setMovieSelected={
                setMovieSelected as React.Dispatch<React.SetStateAction<MovieTotalFromAPI>>
              }
            />
          )}
          {movieSelected && !beingModified && (
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
