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
      {/* Array index should NOT BE USED AS KEY !
        however, in this case, as the elements are never updated, this is acceptable */}
      {stepIcons.map((icon, index) => (
        <div key={index} className={styles.blocImg}>
          <img src={icon} alt={`${icon} icon`} />
        </div>
      ))}
    </div>
  );
};

export default Steps;
