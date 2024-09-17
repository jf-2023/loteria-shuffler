"use client";
import Image from "next/image";
import { useState } from "react";
import cards from "@/data/cards";

export function Deck() {
  const [startContainer, setStartContainer] = useState(cards);
  const [doneContainer, setDoneContainer] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  
  const pullCard = () => {
    setTimeout(() => {const randomNumber = Math.floor(Math.random() * startContainer.length);
    const selectedCard = startContainer[randomNumber];
    const newContainer = startContainer.filter((card) => card !== selectedCard);

    setCurrentCard(selectedCard);
    setStartContainer(newContainer);
    setDoneContainer((prev) => [...prev, selectedCard]);
    console.log(`NEW container: ${newContainer.length}`);
    console.log(`START container: ${startContainer.length}`);
    console.log(`DONE container: ${doneContainer.length}`);
    containerCounter();
    pullCard();}, 1000)
  }     

  const containerCounter = () => {
    const deckSize = 54;
    if (doneContainer === deckSize) {
      alert("Game is done");
    }
  };

  return (
    <div className="main">
      <div className="historyContainer">
        {doneContainer
          .filter((key) => key !== currentCard)
          .reverse()
          .map((pastCardObj) => {
            return (
              <Image
                key={pastCardObj.number}
                src={"/loteria-cards/" + pastCardObj.image}
                alt={pastCardObj.name}
                className="pastCard"
                width={78}
                height={112}
                priority
              />
            );
          })}
      </div>
      {!currentCard ? (
        <Image
          src={"/themes/mexican-pattern.jpeg"}
          alt="mexican-pattern"
          className="startCard"
          width={309}
          height={447}
          priority
        />
      ) : (
        <Image
          src={"/loteria-cards/" + currentCard.image}
          alt={currentCard.name}
          className="mainCard"
          width={309}
          height={447}
          priority
        />
      )}

      <button
        className="playButton"
        onClick={pullCard}
      >
        Start Game
      </button>
    </div>
  );
}