import healthy from "./icons/healthy.svg";
import love from "./icons/love.svg";
import diet from "./icons/diet.svg";
import allergy from "./icons/allergy.svg";
import thumb from "./icons/thumb.svg";
import styles from "./Steps.module.css";

const stepIcons = [healthy, love, allergy, diet, thumb];

const Steps = () => {
  return (
    <div className={styles.containerImg}>
      {stepIcons.map((icon) => (
        <div className={styles.blocImg}>
          <img src={icon} alt={`${icon} icon`} />
        </div>
      ))}
    </div>
  );
};

export default Steps;
