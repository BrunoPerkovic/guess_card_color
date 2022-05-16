import "./App.scss";
import { useState } from "react";
import PokerCard from "./Components/pokerCard/PokerCard";
import club from "./Images/club.jpg";
import diamond from "./Images/diamond.jpg";
import heart from "./Images/heart.jpg";
import spades from "./Images/spades.jpg";

function App() {
  const [selectCard, setSelectCard] = useState();
  const [remainingCards, setRemainingCards] = useState(53);

  const handleSelectCard = (option) => {
    alert("you clicked me");
  };

  const handleRemainingCards = () => {
    setRemainingCards(remainingCards - 1);
  };

  return (
    <div className="App">
      <div className="card">
        <div className="card__option">
          <div className="card__option--row">
            <PokerCard color={spades} />
            <PokerCard color={club} />
          </div>

          <div className="card__option--row">
            <PokerCard color={heart} />
            <PokerCard color={diamond} />
          </div>
        </div>

        <div className="card__deck">
          <p>Remaining cards: {remainingCards} </p>
          <img src="./Images/pokerback.jpg" alt="deck image" />
          <div className="card__deck--graveyard">odigrane karte</div>
        </div>
      </div>

      <div className="score">tu ide koliko san puta pogodia boju karte</div>
    </div>
  );
}

export default App;
