import React, { useState, useEffect } from "react";
import filmAPI from "../../services/filmAPI";
import { toastError, toastValidation } from "../../services/toastService";

function SignUp() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    if (user) {
      filmAPI
        .post("/users", user)
        .then((res) => toastValidation(`Bienvenue, ${user.firstname}, vous pouvez désormais vous connecter 🙂`))
        .catch((err) => {
          console.error(err);
          toastError("Oupsi ! Êtes-vous sûr de vos informations ?");
        });
    } else {
        toastError("Vous n'avez rentré aucune information...")
    }
  };

//   useEffect(() => {
//     console.log("user", user);
//   }, [user]);

  return (
    <div>
      <button type="button">M'inscrire</button>
      <form>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Prénom"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Nom de famille"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="number"
            name="age"
            id="age"
            placeholder="Âge"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="city"
            id="city"
            placeholder="Ville"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="country"
            id="country"
            placeholder="Pays"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="mail"
            name="mail"
            id="mail"
            placeholder="Mail"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="password"
            name="confirm_assword"
            id="confirm_password"
            placeholder="Confirmez votre mot de passe"
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Let's Go
        </button>
      </form>
    </div>
  );
}

export default SignUp;
