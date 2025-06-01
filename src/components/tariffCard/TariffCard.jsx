import React from "react";

export const TariffCard = ({ card }) => {
  return (
    <div className="card">
      <h2 className="card__title">{card.name}</h2>
      <p className="card__feature card__feature--important">
        руб {card.price} /мес
      </p>
      <p className="card__feature">до {card.speedLimit} Мбит/сек</p>
      <p className="card__feature">Объем включенного трафика не ограничен</p>
    </div>
  );
};
