import { useState } from "react";
import styles from "./Form.module.css";

function DietForm(props) {
  const handleForm = (e) => e.preventDefault();
  const handleDiet = () => {};
  return (
    <form onSubmit={handleForm} className={styles.dietForm}>
      <p>Quel est ton regime alimentaire ?</p>
      <label htmlFor="nodiet">Pas de regime en particulier</label>
      <input
        onChange={handleDiet}
        type="radio"
        name="diet"
        id="nodiet"
        value="nodiet"
      />
      <label htmlFor="hypocaloric">Regime hypocalorique</label>
      <input
        onChange={handleDiet}
        type="radio"
        name="diet"
        id="hypocaloric"
        value="hypocaloric"
      />
      <label htmlFor="vegetarian">Vegetarien</label>
      <input
        onChange={handleDiet}
        type="radio"
        name="diet"
        id="vegetarian"
        value="vegetarian"
      />
      <label htmlFor="vegan">Vegan</label>
      <input
        onChange={handleDiet}
        type="radio"
        name="diet"
        id="vegan"
        value="vegan"
      />
      <button onClick={() => props.modifyIndex(3)}>Valider</button>
    </form>
  );
}

export default DietForm;
