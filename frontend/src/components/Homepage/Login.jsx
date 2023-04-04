import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import filmAPI from "../../services/filmAPI";
import { useUserContext } from "../../contexts/UserContext";
import styles from "../../styles/Sign.module.css";

import { toastError, toastValidation } from "../../services/toastService";

function Login() {
  const { setUserId } = useUserContext();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    if (mail.length !== 0 && password.length !== 0) {
      filmAPI.post("/login", { mail, password })
        .then((res) => {
          const firstname = res.data.firstname;
          setUserId(res.data.userId);
          localStorage.setItem('userId', JSON.stringify(res.data.userId));
          navigate('/search');
          toastValidation(`Bienvenue ${firstname} !`);
        })
        .catch((err) => {
          console.error(err);
          toastError(
            "Oupsi ! Un problème avec vos identifiants ?"
          );
        })
    } else {
      toastError(
        "Oups ! Avez-vous bien renseigné votre mail et mot de passe ?"
      );
    }
  };

  return (
    <div className={styles.globalContainer}>
      <button type="button">Me Connecter</button>
      <form>
        <div>
          <input onChange={(e) => setMail(e.target.value)} type="email" name="email" id="email" placeholder='mail' />
        </div>
        <div>
          <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="mot de passe" />
        </div>
        <div className={styles.letGoContainer}>
        <button type="button" onClick={handleSubmit}>Connexion</button>
        </div>
      </form>
    </div>
  )
};

export default Login;