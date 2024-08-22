"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import cards from "@/data/cards";

export function Deck() {
  const [count, setCount] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [startContainer, setStartConatiner] = useState([]);
  const [doneContainer, setDoneConatiner] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  useEffect(() => {
    setStartConatiner(cards);
  }, []);

  const pullCard = () => {
    const randomNumber = Math.floor(Math.random() * startContainer.length);
    const selectedCard = startContainer[randomNumber];
    const newContainer = startContainer.filter(
      (foo, index) => index !== randomNumber
    );
    setCurrentCard(selectedCard);
    setDoneConatiner((prev) => [...prev, selectedCard]);
    setStartConatiner(newContainer);
    containerCounter();
  };

  const containerCounter = () => {
    if (startContainer.length === 0) {
      alert("game is done");
    }
  };

  function handleClick() {
    for (let i = 0; i < cards.length - 1; i++) {
      if (count === cards.length - 1) {
        setCount(0);
      } else {
        changeCard();
      }
    }
    setIsPlay(!isPlay);
  }

  function changeCard() {
    setCount(count + 1);
    setTimeout(handleClick, 2000);
  }

  return (
    <div>
      <div className="cardsContainer">
        {currentCard && (
          <Image
            src={"/loteria-cards/" + currentCard.image}
            alt={currentCard.name}
            width={309}
            height={447}
            priority
          />
        )}
      </div>
      <button className="playButton" onClick={pullCard}>
        Next
      </button>
      /*HOMEWORK: - display past cards shown - fix visuals - correct image paths
      */
    </div>
  );
}
