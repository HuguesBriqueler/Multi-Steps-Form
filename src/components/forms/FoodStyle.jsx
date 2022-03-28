import { useRef } from "react";
import styles from "./Form.module.css";

const FoodStyle = (props) => {
  // Here we use useRef to store an array (of checkboxes refs)
  const chosenStyles = useRef([]);
  // then we populate it with the checkboxes refs (input ref={addStyle} in the form)
  const addStyle = (item) => {
    if (item && !chosenStyles.current.includes(item)) {
      chosenStyles.current.push(item);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    const foodStyleData = {
      foodStyle: [],
    };
    // Here we loop through the array of checkboxes refs to build the foodStyleData that will be passed to the modifyIndex function
    chosenStyles.current.forEach((checkbox) => {
      if (checkbox.checked) {
        foodStyleData.foodStyle.push(checkbox.value);
      }
    });
    props.modifyIndex(4, foodStyleData);
  };

  const handlePrevious = () => {
    props.modifyIndex(2);
  };

  return (
    <form className={styles.checkboxForm} onSubmit={handleForm}>
      <p>Quels sont tes styles de cuisine préférés ?</p>
      <span>Plusieurs choix possibles.</span>

      <label htmlFor="italian">Italien</label>
      <input ref={addStyle} type="checkbox" id="italian" value="italian" />
      <label htmlFor="french">Français</label>
      <input ref={addStyle} type="checkbox" id="french" value="french" />
      <label htmlFor="japanese">Japonais</label>
      <input ref={addStyle} type="checkbox" id="japanese" value="japanese" />
      <label htmlFor="chinese">Chinois</label>
      <input ref={addStyle} type="checkbox" id="chinese" value="chinese" />
      <label htmlFor="indian">Indien</label>
      <input ref={addStyle} type="checkbox" id="indian" value="indian" />
      <label htmlFor="spanish">Espagnol</label>
      <input ref={addStyle} type="checkbox" id="spanish" value="spanish" />
      <label htmlFor="greek">Grec</label>
      <input ref={addStyle} type="checkbox" id="greek" value="greek" />

      <div className={styles.containerNavButton}>
        <button type="button" onClick={handlePrevious}>
          Précédent
        </button>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
};

export default FoodStyle;
