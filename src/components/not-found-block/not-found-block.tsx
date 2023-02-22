import styles from "./not-found-block.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span>🍕</span>
        <br />
        Ничего не найдено...
      </h1>
      <p className={styles.description}>К сожалению, данная страница отсутствует в нашем интернет-магазне</p>
    </div>
  );
};

export { NotFoundBlock };
