import styles from "./StarsBG.module.css";

const StarsBG = () => (
  <div className={styles.starsContainer}>
    {Array.from({ length: 6 }, (_, i) => i).map((i) => {
      const className = `${styles.star} ${styles[`star${i}`]}`;
      return <span key={i} className={className}></span>;
    })}
  </div>
);

export default StarsBG;
