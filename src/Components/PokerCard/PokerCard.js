import React from "react";
import "./PokerCard.scss";
const PokerCard = ({ suit, action, color }) => {
  return (
    <button
      onClick={() => {
        action(color);
      }}
    >
      <img src={suit} alt="poker card" />
    </button>
  );
};

export default PokerCard;
