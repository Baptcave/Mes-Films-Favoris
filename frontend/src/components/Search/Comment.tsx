import React from "react";
import styles from "../../styles/Comment.module.css";
import { MovieCommentToAPI } from "../../types/MovieCommentToAPI";

type CommentProp = {
  myComments: Partial<MovieCommentToAPI> | undefined;
  setMyComments: React.Dispatch<React.SetStateAction<Partial<MovieCommentToAPI> | undefined>>;
  handleClick: () => void;
};

function Comment({ myComments, setMyComments, handleClick }: CommentProp) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setMyComments({ ...myComments, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.allContainer}>
      <div className={styles.card}>
        <div className={styles.field}>
          <label htmlFor='date_seen'>Quand l'avez-vous vu ?</label>
          <input
            onChange={handleChange}
            type='date'
            name='date_seen'
            id='date_seen'
          />
        </div>
        <div className={styles.field}>
          <label htmlFor='mode_seen'>Comment l'avez-vous vu ?</label>
          <select
            defaultValue=''
            name='mode_seen'
            onChange={handleChange}
          >
            <option value=''>---</option>
            <option value='Cinéma'>Cinéma</option>
            <option value='Télévision'>Télévision</option>
            <option value='Ordinateur'>Ordinateur</option>
            <option value='Smartphone'>Smartphone (Vous me dégoûtez...)</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor='my_note'>Comment l'avez-vous apprécié ?</label>
          <input
            onChange={handleChange}
            type='text'
            name='my_note'
            id='my_note'
            placeholder='Votre note sur 10'
          />
        </div>
        <div className={styles.field}>
          <label htmlFor='comment'>Qu'avez-vous ressenti ?</label>
          <textarea
            className={styles.textarea}
            name='comment'
            id='comment'
            placeholder='Comment avez-vous trouvé ce film ?'
            onChange={handleChange}
          />
        </div>
        <button
          type='button'
          onClick={handleClick}
        >
          Valider
        </button>
      </div>
    </div>
  );
}

export default Comment;
