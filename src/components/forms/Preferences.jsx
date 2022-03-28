import { useState } from "react";
import styles from "./Form.module.css";

function Preferences(props) {
  const [preferenceData, setPreferenceData] = useState({
    preferences: {
      love: [],
      hate: [],
    },
  });

  const handleTextArea = (e, prefs) => {
    const text = e.target.value;
    const newPreferenceData = { ...preferenceData };
    newPreferenceData.preferences[prefs] = [...[text.split(",")]];
    setPreferenceData(newPreferenceData);
  };

  const handleForm = (e) => {
    e.preventDefault();
    props.modifyIndex(6, preferenceData);
  };

  const handlePrevious = () => {
    props.modifyIndex(4);
  };

  return (
    <form className={styles.preferencesForm} onSubmit={handleForm}>
      <p>
        Parle nous de tes goûts : Indique-nous les ingrédients que tu préfères
        et que tu détestes
      </p>

      <label htmlFor="prefered">
        Tes aliments préférés, séparés par une virgule :
      </label>
      <textarea
        onChange={(e) => handleTextArea(e, "love")}
        id="prefered"
        placeholder="Ex : fromage, piment, carotte..."
      ></textarea>

      <label htmlFor="hated">
        Les aliments que tu détestes, séparés par une virgule :
      </label>
      <textarea
        onChange={(e) => handleTextArea(e, "hate")}
        id="hated"
        placeholder="Ex : estragon, choux, navets..."
      ></textarea>

      <div className={styles.containerNavButton}>
        <button type="button" onClick={handlePrevious}>
          Précédent
        </button>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
}

export default Preferences;
