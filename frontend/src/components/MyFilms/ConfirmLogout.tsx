import styles from "../../styles/Confirm.module.css";

function ConfirmDelete({ handleToggleLogout, confirmLogout }) {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.cardContainer}>
        <p>Vous allez vous déconnecter</p>
        <p>Êtes-vous sûr.e de vouloir vous déconnecter ?</p>
        <p>Cette action est irréversible</p>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.validateButton}
            type="button"
            onClick={handleToggleLogout}
          >
            Annuler
          </button>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={confirmLogout}
          >
            Je veux me déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
