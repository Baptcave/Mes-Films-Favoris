import React from "react";
import Login from "../components/Homepage/Login";
import SignUp from "../components/Homepage/SignUp";
import styles from "../styles/Homepage.module.css";

function Homepage() {
  return (
    <div>
      <h1 className={styles.title}>Mes Films Favoris</h1>
      <div className={styles.buttonsWrap} >
        <SignUp />
        <Login />
      </div>
    </div>
  );
}

export default Homepage;
