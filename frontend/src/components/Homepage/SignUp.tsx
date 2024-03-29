import React, { useState } from "react";
import filmAPI from "../../services/filmAPI";
import { toastError, toastValidation } from "../../services/toastService";
import styles from "../../styles/Sign.module.css";
import { UserToAPI } from "../../types/UserToAPI";

function SignUp() {
  const [user, setUser] = useState<Partial<UserToAPI>>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    if (user) {
      filmAPI
        .post("/users", user)
        .then(() =>
          toastValidation(`Bienvenue, ${user.firstname}, vous pouvez désormais vous connecter 🙂`)
        )
        .catch((err) => {
          console.error(err);
          toastError("Oupsi ! Êtes-vous sûr de vos informations ?");
        });
    } else {
      toastError("Vous n'avez rentré aucune information...");
    }
  };

  return (
    <div className={styles.globalContainer}>
      <button type='button'>M'inscrire</button>
      <form>
        <div>
          <input
            onChange={handleChange}
            type='text'
            name='firstname'
            id='signUp-firstname'
            placeholder='Prénom'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type='text'
            name='lastname'
            id='signUp-lastname'
            placeholder='Nom de famille'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type='number'
            name='age'
            id='signUp-age'
            placeholder='Âge'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type='text'
            name='city'
            id='signUp-city'
            placeholder='Ville'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type='text'
            name='country'
            id='signUp-country'
            placeholder='Pays'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type='mail'
            name='mail'
            id='signUp-mail'
            placeholder='Mail'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            id='signUp-password'
            placeholder='Mot de passe'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type='password'
            name='confirm_password'
            id='signUp-confirm_password'
            placeholder='Confirmez votre mot de passe'
          />
        </div>
        <div className={styles.letGoContainer}>
          <button
            type='button'
            id='signUpBtn'
            onClick={handleSubmit}
          >
            Let's Go
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
