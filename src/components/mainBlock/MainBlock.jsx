import { TariffCards } from "../tariffCards/TariffCards";
import styles from "./MainBlock.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const MainBlock = () => {
  return (
    <main className={cx("main")}>
      <h1 className={cx("title")}>Наши Тарифы</h1>
      <TariffCards />
    </main>
  );
};
