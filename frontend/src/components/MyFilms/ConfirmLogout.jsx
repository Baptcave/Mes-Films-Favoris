import React from 'react';

function ConfirmDelete({handleToggleLogout, confirmLogout}) {
  return (
    <div>
        <p>Vous allez vous déconnecter.</p>
        <p>Êtes-vous sûr.e de vouloir vous déconnecter ?</p>
        <p>Cette action est irréversible</p>
        <button type="button" onClick={handleToggleLogout}>Annuler</button>
        <button type="button" onClick={confirmLogout}>Je veux me déconnecter</button>
    </div>
  )
};

export default ConfirmDelete;