import formateDate from "../../services/dateFormat";
import { MovieTotalFromAPI } from "../../types/MovieTotalFromAPI";

import styles from "../../styles/MyComment.module.css";

type MyCommentProps = {
  movie: MovieTotalFromAPI;
  handleModify: () => void;
  handleToggleDelete: (e: React.MouseEvent<HTMLElement>) => void;
};

function MyComment({ movie, handleModify, handleToggleDelete }: MyCommentProps) {
  return (
    <div className={styles.allContainer}>
      <div className={styles.card}>
        <div className={styles.field}>
          <p>Je l'ai vu le :</p>
          <p>{formateDate(movie.date_seen)}</p>
        </div>
        <div className={styles.field}>
          <p>Je l'ai regardé sur :</p>
          <p>{movie.mode_seen}</p>
        </div>
        <div className={styles.field}>
          <p>Ma note : </p>
          <p>{movie.my_note} / 10</p>
        </div>
        <div className={styles.field}>
          <p>J'en ai pensé ceci :</p>
          <p>{movie.comment}</p>
        </div>
        <div className={styles.buttonsContainer}>
          <button
            type='button'
            onClick={handleModify}
          >
            Modifier
          </button>
          <button
            type='button'
            onClick={handleToggleDelete}
            id={movie.id_movie.toString()}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyComment;
