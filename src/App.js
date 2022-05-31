import "./App.scss";
import { useState, useEffect } from "react";
import PokerCard from "./Components/PokerCard/PokerCard";
import club from "./Images/club.jpg";
import diamond from "./Images/diamond.jpg";
import heart from "./Images/heart.jpg";
import spade from "./Images/spade.jpg";
import pokerback from "./Images/pokerback.jpg";
import Card from "react-playing-card";
/* import { act } from "react-dom/test-utils";
 */
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

function App() {
  const [remainingCards, setRemainingCards] = useState(0);
  const [score, setScore] = useState(0);
  const [poppedCard, setPoppedCard] = useState(<PokerCard suit={pokerback} />);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    let currDeck = createDeck();
    setDeck(currDeck);
    setRemainingCards(currDeck.length);
  }, []);

  console.log(deck);
  function createDeck() {
    let currDeck = [];
    suits.forEach((suit) => {
      ranks.forEach((rank, i) => {
        currDeck.push(<Card suit={suit} rank={rank} key={i} />);
      });
    });
    return currDeck;
  }

  const resetStates = () => {
    let currDeck = createDeck();
    setDeck(currDeck);
    setRemainingCards(currDeck.length);
    setScore(0);
    setPoppedCard(<PokerCard suit={pokerback} />);
  };

  const handleSelectCard = (color) => {
    if (remainingCards === 0) {
      resetStates();
      return;
    }

    let popped = deck.splice(Math.floor(Math.random() * deck.length), 1);
    setPoppedCard(popped);
    setRemainingCards(remainingCards - 1);
    if (color === popped[0].props.suit) {
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

        <div>
          <div className="score">Koliko si pogodia karata: {score} </div>
          <button onClick={() => resetStates()}>Reset Game</button>
        </div>

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
