import styles from "./TariffCard.module.scss";
import classNames from "classnames/bind";
import { catigories } from "../../common/constants/data";

const cx = classNames.bind(styles);

export const TariffCard = ({ card, chosen = false, onChoose }) => {
  const category = catigories[card.id];
  const cardClasses = cx(
    "card",
    category && `card--${category}`,
    chosen && "card--bigger"
  );

  return (
    <div className={cardClasses} onClick={onChoose}>
      <h2 className={cx("card__title")}>{card.name}</h2>
      <p className={cx("card__price")}>
        <span className={cx("card__price-num")}>{card.price}</span>
        <span className={cx("card__price-currency")}>руб</span>
        <span className={cx("card__price-period")}> /мес</span>
      </p>
      <p className={cx("card__speed")}>до {card.speedLimit} Мбит/сек</p>
      <p className={cx("card__traffic")}>
        Объем включенного трафика не ограничен
      </p>
    </div>
  );
};
