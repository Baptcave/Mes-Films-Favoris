import React, { useState } from 'react';

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <button type="button">Me Connecter</button>
      <form>
        <div>
          <input onChange={(e) => setMail(e.target.value)} type="email" name="email" id="email" placeholder='mail' />
        </div>
        <div>
          <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="mot de passe" />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  )
};

export default Login;