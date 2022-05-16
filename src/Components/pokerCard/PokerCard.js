import React from "react";
import "./PokerCard.scss";
const PokerCard = ({ suit, action, color }) => {
  return (
    <a
      href="#"
      onClick={() => {
        action(color);
      }}
    >
      <img src={suit} alt="poker card" />
    </a>
  );
};

export default PokerCard;
