import React from 'react';

function ConfirmDelete({handleToggleDelete, confirmSuppression}) {
  return (
    <div>
        <p>Êtes-vous sûr.e d vouloir supprimer ce film ?</p>
        <p>Cette action est irréversible</p>
        <button type="button" onClick={handleToggleDelete}>Annuler</button>
        <button type="button" onClick={confirmSuppression}>Confirmer la suppression</button>
    </div>
  )
};

export default ConfirmDelete;