import styles from "./TariffCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const TariffCard = ({ card, important }) => {
  const variant = card.category;
  const cardClasses = cx(
    "card",
    variant && `card--${variant}`,
    important && "card--bigger"
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
