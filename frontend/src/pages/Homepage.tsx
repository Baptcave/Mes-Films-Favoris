import Login from "../components/Homepage/Login";
import SignUp from "../components/Homepage/SignUp";
import styles from "../styles/Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Mes Films Favoris maj par CD</h1>
      </div>
      <div className={styles.buttonsWrap}>
        <SignUp />
        <Login />
      </div>
    </div>
  );
}

export default Homepage;
