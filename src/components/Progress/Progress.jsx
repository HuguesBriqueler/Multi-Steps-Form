import styles from "./Progress.module.css";
import Steps from "./Steps";

function Progress({ formIndex }) {
  return (
    <div className={styles.containerProgress}>
      {/* Progress bar */}
      <div>
        <div
          className={`${styles.line} ${styles.upperLine}`}
          style={{
            width:
              formIndex === 1
                ? "0%"
                : formIndex === 2
                ? "0%"
                : formIndex === 3
                ? "25%"
                : formIndex === 4
                ? "50%"
                : formIndex === 5
                ? "75%"
                : "100%",
          }}
        ></div>
        <div className={`${styles.line} ${styles.underLine}`}></div>
      </div>
      <Steps />
    </div>
  );
}

export default Progress;
