"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import cards from "@/data/cards";

export function Deck() {
  const [startContainer, setStartContainer] = useState([]);
  const [doneContainer, setDoneContainer] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  useEffect(() => {
    setStartContainer(cards);
  }, []);

  const pullCard = () => {
    const randomNumber = Math.floor(Math.random() * startContainer.length);
    const selectedCard = startContainer[randomNumber];
    const newContainer = startContainer.filter(
      (foo, index) => index !== randomNumber
    );
    setCurrentCard(selectedCard);
    setDoneContainer((prev) => [...prev, selectedCard]);
    setStartContainer(newContainer);
    containerCounter();
  };

  const containerCounter = () => {
    if (startContainer.length === 0) {
      alert("game is done");
    }
  };


  return (
    <div className="main">
        {!currentCard ? (
          <Image
            src={"/themes/mexican-pattern.jpeg"}
            alt="mexican-pattern"
            className="startCard"
            width={309}
            height={447}
            priority
          />
        ):(
          <Image
            src={"/loteria-cards/" + currentCard.image}
            alt={currentCard.name}
            className="mainCard"
            width={309}
            height={447}
            priority
          />
        )}
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
          })
          }
        </div>
        <button className="playButton" onClick={() => setTimeout(pullCard, 1500)}>
          {!currentCard ? "Start Game":"Next Card"}
        </button>
        {/*
        HOMEWORK:
        - change alert to something else
        */}
    </div>
  );
}
