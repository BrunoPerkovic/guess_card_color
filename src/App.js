import "./App.scss";
import { useState } from "react";
import PokerCard from "./Components/PokerCard/PokerCard";
import club from "./Images/club.jpg";
import diamond from "./Images/diamond.jpg";
import heart from "./Images/heart.jpg";
import spade from "./Images/spade.jpg";
import pokerback from "./Images/pokerback.jpg";
import Card from "react-playing-card";

const suits = ["H", "D", "S", "C"];
const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const deck = [];
suits.forEach((suit) => {
  ranks.forEach((rank, i) => {
    deck.push(<Card suit={suit} rank={rank} key={i} />);
  });
});
console.log(deck);

function App() {
  const [selectCard, setSelectCard] = useState();
  const [remainingCards, setRemainingCards] = useState(53);
  const [score, setScore] = useState(0);
  const [poppedCard, setPoppedCard] = useState();

  const showGeneratedCard = () => {
    setPoppedCard(deck.splice(Math.floor(Math.random() * deck.length), 1));
    console.log(poppedCard);
  };

  const handleSelectCard = (color) => {
    setRemainingCards(remainingCards - 1);
    showGeneratedCard();
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <div className="mojCard">
        <div className="mojCard__option">
          <div className="mojCard__option--row">
            <PokerCard suit={spade} action={handleSelectCard} color="spade" />
            <PokerCard suit={club} action={handleSelectCard} color="club" />
          </div>

          <div className="mojCard__option--row">
            <PokerCard suit={heart} action={handleSelectCard} color="heart" />
            <PokerCard
              suit={diamond}
              action={handleSelectCard}
              color="diamond"
            />
          </div>
        </div>

        <div className="score">Koliko si pogodia karata: {score} </div>

        <div className="mojCard__deck">
          <p>Remaining cards: {remainingCards} </p>
          <PokerCard suit={pokerback} />
          <div className="mojCard__deck--graveyard">{poppedCard}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
