import { TariffCards } from "../tariffCards/TariffCards";
import styles from "./MainBlock.module.scss";

export const MainBlock = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Наши Тарифы</h1>
      <TariffCards />
    </main>
  );
};
