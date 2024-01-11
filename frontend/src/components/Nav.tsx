import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import filmAPI from "../services/filmAPI";
import { toastError, toastValidation } from "../services/toastService";

import ConfirmLogout from "./MyFilms/ConfirmLogout";

import Logo from "../assets/logos/film-movie-reel-icon.webp";
import styles from "../styles/Nav.module.css";

function Nav() {
  const navigate = useNavigate();

  const [confirmLogoutIsDisplay, setConfirmLogoutIsDisplay] = useState(false);

  const handleToggleLogout = () => {
    setConfirmLogoutIsDisplay((prev) => !prev);
  };

  const confirmLogout = () => {
    filmAPI
      .get("/logout")
      .then(() => {
        localStorage.clear();
        toastValidation("Vous êtes bien déconnecté.e. Au revoir 👋");
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
        toastError("Problème ? BaptGeek est sur le coup... 🤓");
      });
  };

  return (
    <div className={styles.navBody}>
      <button
        className={styles.logoContainer}
        type='button'
        onClick={handleToggleLogout}
      >
        <img
          className={styles.logo}
          src={Logo}
          alt='Logo'
        />
      </button>
      <div className={styles.buttonsWrap}>
        <Link to='/search'>
          <span className={styles.button}>Recherche</span>
        </Link>
        <Link to='/my-films'>
          <span className={styles.button}>Mes Films Favoris</span>
        </Link>
      </div>
      {confirmLogoutIsDisplay && (
        <div className={styles.popUpContainer}>
          <div className={styles.fakeDiv}></div>
          <ConfirmLogout
            handleToggleLogout={handleToggleLogout}
            confirmLogout={confirmLogout}
          />
        </div>
      )}
    </div>
  );
}

export default Nav;
