import { tariffs } from "../../common/constants/data";
import { TariffCard } from "../tariffCard/TariffCard";
import styles from "./TariffCards.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const TariffCards = () => {
  return (
    <div className={cx("cards")}>
      {tariffs.map((tariff) => (
        <TariffCard key={tariff.id} card={tariff} />
      ))}
    </div>
  );
};
