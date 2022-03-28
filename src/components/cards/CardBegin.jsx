import styles from "./Card.module.css";

const CardBegin = (props) => {
  return (
    <div className={styles.card}>
      <h1>Aides-nous à ravir tes papilles </h1>
      <button onClick={() => props.modifyIndex(2)}>COMMENCER</button>
    </div>
  );
};

export default CardBegin;
