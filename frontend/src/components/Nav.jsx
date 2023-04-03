import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logos/film-movie-reel-icon.webp";
import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <div className={styles.navBody}>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="Logo" />
      </Link>
      <div className={styles.buttonsWrap}>
        <Link to="/search">Recherche</Link>
        <Link to="/my-films">Mes Films Favoris</Link>
      </div>
    </div>
  );
}

export default Nav;
