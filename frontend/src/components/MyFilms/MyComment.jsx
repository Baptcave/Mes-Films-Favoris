import React from "react";
import formateDate from "../../services/dateFormat";

import styles from "../../styles/MyComment.module.css";

function MyComment({movie, handleModify, handleToggleDelete}) {

  return (
    <div className={styles.allContainer}>
      <div className={styles.card}>
        <p>Vous l'avez vu le :</p>
        <p>{formateDate(movie.date_seen)}</p>
        <p>Vous l'avez regardé sur :</p>
        <p>{movie.mode_seen}</p>
        <p>Votre note : </p>
        <p>{movie.my_note} / 10</p>
        <p>Vous en avez pensé ceci :</p>
        <p>{movie.comment}</p>
        <button type="button" onClick={handleModify}>Modifier</button>
        <button type="button" onClick={handleToggleDelete} id={movie.id_movie}>Supprimer</button>
      </div>
    </div>
  );
}

export default MyComment;
