import styles from "../../styles/Confirm.module.css";

type ConfirmDeleteProps = {
  handleToggleDelete: (e: React.MouseEvent<HTMLElement>) => void;
  confirmSuppression: () => void;
};

function ConfirmDelete({ handleToggleDelete, confirmSuppression }: ConfirmDeleteProps) {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.cardContainer}>
        <p>Êtes-vous sûr.e d vouloir supprimer ce film ?</p>
        <p>Cette action est irréversible</p>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.validateButton}
            type='button'
            onClick={confirmSuppression}
          >
            Confirmer la suppression
          </button>
          <button
            className={styles.cancelButton}
            type='button'
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
