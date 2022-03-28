import { useRef } from "react";
import styles from "./Form.module.css";

const Allergies = (props) => {
  // Here we use useRef to store an array (of checkboxes refs)
  const chosenAllergies = useRef([]);
  // then we populate it with the checkboxes refs (input ref={addStyle} in the form)
  const addStyle = (item) => {
    if (item && !chosenAllergies.current.includes(item)) {
      chosenAllergies.current.push(item);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    const allergiesData = {
      allergies: [],
    };
    // Here we loop through the array of checkboxes refs to build the allergiesData that will be passed to the modifyIndex function
    chosenAllergies.current.forEach((checkbox) => {
      if (checkbox.checked) {
        allergiesData.allergies.push(checkbox.value);
      }
    });
    props.modifyIndex(5, allergiesData);
  };

  const handlePrevious = () => {
    props.modifyIndex(3);
  };

  return (
    <form className={styles.checkboxForm} onSubmit={handleForm}>
      <p>As tu des allergies ?</p>
      <span>Plusieurs choix possibles.</span>

      <label htmlFor="milk">Lait</label>
      <input ref={addStyle} type="checkbox" id="milk" value="milk" />
      <label htmlFor="egg">Oeuf</label>
      <input ref={addStyle} type="checkbox" id="egg" value="egg" />
      <label htmlFor="fish">Poisson</label>
      <input ref={addStyle} type="checkbox" id="fish" value="fish" />
      <label htmlFor="peanuts">Arachides</label>
      <input ref={addStyle} type="checkbox" id="peanuts" value="peanuts" />
      <label htmlFor="soy">Soja</label>
      <input ref={addStyle} type="checkbox" id="soy" value="soy" />
      <label htmlFor="nuts">Noix</label>
      <input ref={addStyle} type="checkbox" id="nuts" value="nuts" />

      <div className={styles.containerNavButton}>
        <button type="button" onClick={handlePrevious}>
          Précédent
        </button>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
};

export default Allergies;
