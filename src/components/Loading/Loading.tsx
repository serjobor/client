import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.spinner}></div>
      <div className={styles.loadingText}>Загрузка...</div>
    </div>
  );
};

export default Loading;