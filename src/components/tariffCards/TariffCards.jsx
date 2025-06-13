import React from "react";
import { tariffs } from "../../common/constants/data";
import { TariffCard } from "../TariffCard/TariffCard";
import styles from "./TariffCards.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const TariffCards = () => {
  const [chosen, setChosen] = React.useState(null);

  const handleClick = (id) => {
    if (chosen === id) {
      setChosen(null);
    } else {
      setChosen(id);
    }
  };
  return (
    <div className={cx("cards")}>
      {tariffs.map((tariff) => (
        <TariffCard
          key={tariff.id}
          card={tariff}
          chosen={chosen === tariff.id}
          onChoose={() => handleClick(tariff.id)}
        />
      ))}
    </div>
  );
};
