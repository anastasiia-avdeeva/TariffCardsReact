import styles from "./TariffCard.module.scss";
import classNames from "classnames/bind";
import { catigories, importance } from "../../common/constants/data";

const cx = classNames.bind(styles);

export const TariffCard = ({ card }) => {
  const category = catigories[card.id];
  const isImportant = importance[card.id];
  const cardClasses = cx(
    "card",
    category && `card--${category}`,
    isImportant && "card--bigger"
  );

  return (
    <div className={cardClasses}>
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
