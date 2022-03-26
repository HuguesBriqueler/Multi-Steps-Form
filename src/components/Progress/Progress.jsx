import styles from "./Progress.module.css";
import Steps from "./Steps";

function Progress() {
  return (
    <div className={styles.containerProgress}>
      {/* Progress bar */}
      <div>
        <div className={`${styles.line} ${styles.upperLine}`}></div>
        <div className={`${styles.line} ${styles.underLine}`}></div>
      </div>
      <Steps />
    </div>
  );
}

export default Progress;
