import { TariffCards } from "../tariffCards/TariffCards";
import styles from "./MainBlock.module.scss";

export const MainBlock = () => {
  return (
    <main className={styles.main}>
      <TariffCards />
    </main>
  );
};
