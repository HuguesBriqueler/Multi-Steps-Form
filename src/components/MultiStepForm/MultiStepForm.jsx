import { useState } from "react";
import styles from "./MultiStepForm.module.css";

import Progress from "../Progress/Progress";
import CardBegin from "../cards/CardBegin";
import CardEnd from "../cards/CardEnd";
import DietForm from "../forms/DietForm";
import FoodStyle from "../forms/FoodStyle";
import Allergies from "../forms/Allergies";
import Preferences from "../forms/Preferences";

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

  const formLayout = [
    <CardBegin modifyIndex={modifyIndex} key={"CardBegin"} />,
    <DietForm modifyIndex={modifyIndex} key={"DietForm"} />,
    <FoodStyle modifyIndex={modifyIndex} key={"FoodStyle"} />,
    <Allergies modifyIndex={modifyIndex} key={"Allergies"} />,
    <Preferences modifyIndex={modifyIndex} key={"Preferences"} />,
    <CardEnd key={"CardEnd"} />,
  ];

  return (
    <div className={styles.containerMultiStep}>
      <Progress formIndex={formIndex} />
      {formLayout.map((form, index) => {
        return index === formIndex - 1 ? form : null;
      })}
    </div>
  );
}

export default MultiStepForm;
