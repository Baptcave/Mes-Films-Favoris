import styles from "../../styles/Confirm.module.css";

function ConfirmDelete({ handleToggleDelete, confirmSuppression }) {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.cardContainer}>
        <p>Êtes-vous sûr.e d vouloir supprimer ce film ?</p>
        <p>Cette action est irréversible</p>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.validateButton}
            type="button"
            onClick={confirmSuppression}
          >
            Confirmer la suppression
          </button>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={handleToggleDelete}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
