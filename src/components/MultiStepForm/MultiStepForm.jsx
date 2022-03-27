import { useState } from "react";
import styles from "./MultiStepForm.module.css";

import Progress from "../Progress/Progress";
import CardBegin from "../cards/CardBegin";
import CardEnd from "../cards/CardEnd";
import DietForm from "../forms/DietForm";
import FoodStyle from "../forms/FoodStyle";

function MultiStepForm() {
  const [formIndex, setFormIndex] = useState(1);
  const [foodPreferences, setFoodPreferences] = useState({
    diet: "",
    foodStyle: [],
    allergies: [],
    preferences: {},
  });

  const modifyIndex = (index, formData) => {
    setFormIndex(index);
    if (formData) {
      setFoodPreferences({ ...foodPreferences, ...formData });
    }
  };
  return (
    <div className={styles.containerMultiStep}>
      <Progress />
      {formIndex === 1 && <CardBegin modifyIndex={modifyIndex} />}
      {formIndex === 2 && <DietForm modifyIndex={modifyIndex} />}
      {formIndex === 3 && <FoodStyle modifyIndex={modifyIndex} />}
      {formIndex === 5 && <CardEnd />}
    </div>
  );
}

export default MultiStepForm;
