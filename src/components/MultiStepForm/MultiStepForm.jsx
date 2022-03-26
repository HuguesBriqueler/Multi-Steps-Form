import { useState } from "react";
import styles from "./MultiStepForm.module.css";

import Progress from "../Progress/Progress";

function MultiStepForm() {
  const [formIndex, setFormIndex] = useState(1);
  const [foodPreferences, setFoodPreferences] = useState({
    diet: "",
    foodStyle: [],
    allergies: [],
    preferences: {},
  });
  return (
    <div className={styles.containerMultiStep}>
      <Progress />
    </div>
  );
}

export default MultiStepForm;
