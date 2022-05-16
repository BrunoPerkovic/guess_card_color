import "./App.scss";
import { useState } from "react";
import PokerCard from "./Components/pokerCard/PokerCard";
import club from "./Images/club.jpg";
import diamond from "./Images/diamond.jpg";
import heart from "./Images/heart.jpg";
import spade from "./Images/spade.jpg";
import pokerback from "./Images/pokerback.jpg";

function App() {
  const [selectCard, setSelectCard] = useState();
  const [remainingCards, setRemainingCards] = useState(53);
  const [score, setScore] = useState(0);

  const handleSelectCard = (color) => {
    alert("you clicked me. My suit is: " + color);
  };

  const handleRemainingCards = () => {
    setRemainingCards(remainingCards - 1);
  };

  const handleScore = () => {
    setScore(score + 1);
  };
  return (
    <div className="App">
      <div className="card">
        <div className="card__option">
          <div className="card__option--row">
            <PokerCard suit={spade} action={handleSelectCard} color="spade" />
            <PokerCard suit={club} action={handleSelectCard} color="club" />
          </div>

          <div className="card__option--row">
            <PokerCard suit={heart} action={handleSelectCard} color="heart" />
            <PokerCard
              suit={diamond}
              action={handleSelectCard}
              color="diamond"
            />
          </div>
        </div>

        <div className="card__deck">
          <p>Remaining cards: {remainingCards} </p>
          <PokerCard card={pokerback} />
          <div className="card__deck--graveyard">
            odigrane karte, tu ce se prikazat zadnja odigrana karta
          </div>
        </div>
      </div>

      <div className="score">Koliko si pogodia karata: {score} </div>
    </div>
  );
}

export default App;
