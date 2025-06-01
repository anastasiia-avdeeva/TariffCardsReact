import React from "react";
import { tariffs } from "../../common/constants/data";
import { TariffCard } from "../tariffCard/TariffCard";

export const TariffCards = () => {
  return (
    <div className="cards">
      {tariffs.map((tariff) => (
        <TariffCard key={tariff.id} card={tariff} />
      ))}
    </div>
  );
};
