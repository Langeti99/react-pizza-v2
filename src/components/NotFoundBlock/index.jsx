import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😢</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>Данная страница отсутствует на нашем сайте</p>
    </div>
  );
};

export default NotFoundBlock;
