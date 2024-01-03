import { useState } from "react";
import filmAPI from "../../services/filmAPI";
import formateDate from "../../services/dateFormat";
import { toastError, toastValidation } from "../../services/toastService";
import { MovieCommentToAPI } from "../../types/MovieCommentToAPI";

import styles from "../../styles/MyComment.module.css";

function ModifyComment({ movie, setBeingModified, setMovieSelected }) {
  const [myComments, setMyComments] = useState<Partial<MovieCommentToAPI>>();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setMyComments({ ...myComments, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    const movieId = movie.id_movie;
    const movieUpdate = { ...myComments, id_movie: movieId };
    filmAPI
      .put(`/movies/${movie.id}`, movieUpdate)
      .then((res) => {
        setMovieSelected(res.data);
        toastValidation("Vos impressions ont bien été modifiées ✌️");
        setBeingModified((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
        toastError("Oupsi... Les petites souris ont grignoté les câbles... 🐭");
      });
  };

  return (
    <div className={styles.allContainer}>
      <div className={styles.card}>
        <div className={styles.field}>
          <label htmlFor="date_seen">Quand l'avez-vous vu ?</label>
          <p>{`(date précédente : ${formateDate(movie.date_seen)})`}</p>
          <input
            onChange={handleChange}
            type="date"
            name="date_seen"
            id="date_seen"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="mode_seen">Comment l'avez-vous vu ?</label>
          <p>{`(mode précédent : ${movie.mode_seen})`}</p>
          <select
            defaultValue=""
            name="mode_seen"
            onChange={handleChange}
          >
            <option value="">---</option>
            <option value="Cinéma">Cinéma</option>
            <option value="Télévision">Télévision</option>
            <option value="Ordinateur">Ordinateur</option>
            <option value="Smartphone">Smartphone (Vous me dégoûtez...)</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="my_note">Comment l'avez-vous apprécié ?</label>
          <p>{`(note précédente : ${movie.my_note})`}</p>
          <input
            onChange={handleChange}
            type="text"
            name="my_note"
            id="my_note"
            placeholder="Votre note sur 10"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="comment">Qu'avez-vous ressenti ?</label>
          <textarea
            className={styles.textarea}
            name="comment"
            id="comment"
            placeholder={movie.comment}
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <button
            type="button"
            onClick={() => setBeingModified((prev) => !prev)}
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={handleSaveChanges}
          >
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModifyComment;
