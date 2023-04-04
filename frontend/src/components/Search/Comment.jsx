import React, { useState, useEffect } from 'react';
import styles from '../../styles/Comment.module.css';

function Comment() {
    const [date, setDate] = useState("");
    const [modeSeen, setModeSeen] = useState("");
    const [myComments, setMyComments] = useState({});

    const handleDate = (e) => {
setDate(e.target.value);
    };

    const handleSelect = (e) => {
        setModeSeen(e.target.value);
        setMyComments({...myComments, mode_seen: e.target.value})
    };

    useEffect(() => {
        console.log(modeSeen);
    }, [modeSeen]);

    useEffect(() => {
        console.log(myComments);
    }, [myComments]);

    useEffect(() => {
        console.log(date);
    }, [date]);
  return (
    <div className={styles.allContainer}>
        <div className={styles.card}>
        <input
        onChange={handleDate}
        type="date"
        name="date_seen"
        id="date_seen"/>
        <select value={modeSeen} onChange={handleSelect}>
            <option selected value="Cinéma">Cinéma</option>
            <option value="Télévision">Télévision</option>
            <option value="Ordinateur">Ordinateur</option>
            <option value="Smartphone">Smartphone (Vous me dégoûtez...)</option>
        </select>
        <label>Ajoutez une note sur 10</label>
        </div>
    </div>
  )
};

export default Comment;