import "./App.scss";
import { useState } from "react";
import PokerCard from "./Components/PokerCard/PokerCard";
import club from "./Images/club.jpg";
import diamond from "./Images/diamond.jpg";
import heart from "./Images/heart.jpg";
import spade from "./Images/spade.jpg";
import pokerback from "./Images/pokerback.jpg";
import Card from "react-playing-card";
import { act } from "react-dom/test-utils";

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
  const [remainingCards, setRemainingCards] = useState(deck.length);
  const [score, setScore] = useState(0);
  const [poppedCard, setPoppedCard] = useState(<PokerCard suit={pokerback} />);

  const resetStates = () => {
    setRemainingCards(deck.length);
    setScore(0);
    setPoppedCard(<PokerCard suit={pokerback} />);
  };

  const handleSelectCard = (color) => {
    setPoppedCard(deck.splice(Math.floor(Math.random() * deck.length), 1));
    setRemainingCards(remainingCards - 1);
    if (color === "S") {
      handleScore();
    } else if (color === "D") {
      handleScore();
    } else if (color === "H") {
      handleScore();
    } else if (color === "C") {
      handleScore();
    }
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <div className="board">
        <div className="board__option">
          <div className="board__option--row">
            <PokerCard suit={spade} action={handleSelectCard} color="S" />
            <PokerCard suit={club} action={handleSelectCard} color="C" />
          </div>

          <div className="board__option--row">
            <PokerCard suit={heart} action={handleSelectCard} color="H" />
            <PokerCard suit={diamond} action={handleSelectCard} color="D" />
          </div>
        </div>

        <div className="score">Koliko si pogodia karata: {score} </div>

        <div className="board__deck">
          <p>Remaining cards: {remainingCards} </p>
          <PokerCard suit={pokerback} />
          <div className="board__deck--graveyard">{poppedCard}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
