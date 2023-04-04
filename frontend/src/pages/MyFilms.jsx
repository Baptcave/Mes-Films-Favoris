import React, { useState, useEffect } from "react";
import filmAPI from "../services/filmAPI";

// import { useUserContext } from "../contexts/UserContext";
import styles from "../styles/MyFilmsPage.module.css";

import Nav from "../components/Nav";
import SearchMine from "../components/MyFilms/SearchMine";
import MyMovieSelected from "../components/MyFilms/MyMovieSelected";
import ModifyComment from "../components/MyFilms/ModifyComment";
import MyComment from "../components/MyFilms/MyComment";


function MyFilms() {
  // const { userId } = useUserContext();
  const userId = JSON.parse(localStorage.getItem("userId"));

  const [movies, setMovies] = useState([]);
  const [movieSelected, setMovieSelected] = useState({});
  const [beingModified, setBeingModified] = useState(false);

  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    filmAPI
      .get(`/movies/${userId}`)
      .then((res) => {
        console.log(res);
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

  return (
    <div>
      <Nav />
      <div className={styles.gridContainer}>
        <SearchMine userId={userId} handleOneMovie={handleOneMovie} movies={movies} />
        {Object.keys(movieSelected).length !== 0 && <MyMovieSelected movie={movieSelected} />}
        {Object.keys(movieSelected).length !== 0 && beingModified && <ModifyComment movie={movieSelected} setBeingModified={setBeingModified} setMovieSelected={setMovieSelected} />}
        {Object.keys(movieSelected).length !== 0 && !beingModified && <MyComment movie={movieSelected} handleModify={handleModify} />}
      </div>
    </div>
  );
}

export default MyFilms;
