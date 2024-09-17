"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import cards from "@/data/cards";

export function Deck2() {
  const [startContainer, setStartContainer] = useState([]);
  const [doneContainer, setDoneContainer] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    setStartContainer(cards);
  }, []);

  
  let map = new Map();

  const pullCard = () => {
    const randomNumber = Math.floor(Math.random() * startContainer.length);
    console.log(`random number: ${randomNumber}`);

    if (!map.has(randomNumber) && map.size != startContainer.length) {
      map.set(randomNumber, randomNumber);
      console.log(`random number: ${map.set(randomNumber, randomNumber)}`);
      const selectedCard = startContainer[randomNumber];
      const newContainer = startContainer.filter(
        (foo, index) => index !== randomNumber
      );
      setCurrentCard(selectedCard);
      setDoneContainer((prev) => [...prev, selectedCard]);
      setStartContainer(newContainer);
      console.log(startContainer.length);
      console.log(doneContainer.length);
      containerCounter();
    } else {
      if (map.size != startContainer.length) {
        console.log(`ELSE STATEMENT`);
        pullCard();
      }
    }
  };
  
  let nInterId;

  const containerCounter = () => {
    if (map.size === 54) {
      nInterId = null;
      setStartContainer([]);
      setDoneContainer([]);
      setCurrentCard(null);
    }
  };

  const changeCard = () => {
    if (!nInterId) {
      nInterId = setInterval(pullCard, 1000);
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
        onClick={changeCard}
        disabled={currentCard}
      >
        Start Game
      </button>
    </div>
  );
}
