import React from "react";
import "./PokerCard.scss";
const PokerCard = ({ color }) => {
  return (
    <a>
      <img src={color} alt="poker card" />
    </a>
  );
};

export default PokerCard;
