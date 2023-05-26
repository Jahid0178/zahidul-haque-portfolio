import styles from "./style.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.customLoader}></div>
    </div>
  );
};

export default Loading;
