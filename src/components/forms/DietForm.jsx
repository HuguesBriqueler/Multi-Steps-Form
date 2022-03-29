import { useState } from "react";
import styles from "./Form.module.css";

function DietForm(props) {
  const [formData, setFormData] = useState({ diet: "nodiets" });
  const handleDietChange = (e) => {
    setFormData({ diet: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    props.modifyIndex(3, formData);
  };

  return (
    <form onSubmit={handleForm} className={styles.dietForm}>
      <p>Quel est ton regime alimentaire ?</p>
      <label htmlFor="nodiet">Pas de regime en particulier</label>
      <input
        onChange={handleDietChange}
        type="radio"
        name="diet"
        id="nodiet"
        value="nodiet"
      />
      <label htmlFor="hypocaloric">Regime hypocalorique</label>
      <input
        onChange={handleDietChange}
        type="radio"
        name="diet"
        id="hypocaloric"
        value="hypocaloric"
      />
      <label htmlFor="vegetarian">Vegetarien</label>
      <input
        onChange={handleDietChange}
        type="radio"
        name="diet"
        id="vegetarian"
        value="vegetarian"
      />
      <label htmlFor="vegan">Vegan</label>
      <input
        onChange={handleDietChange}
        type="radio"
        name="diet"
        id="vegan"
        value="vegan"
      />
      <button type="submit">Valider</button>
    </form>
  );
}

export default DietForm;
