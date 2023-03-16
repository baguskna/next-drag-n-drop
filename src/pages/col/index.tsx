import Column from "@/components/Column";
import React, { useState } from "react";

import styles from "./index.module.css";

const Board = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", column: "Column 1" },
    { id: 2, title: "Card 2", column: "Column 1" },
    { id: 3, title: "Card 3", column: "Column 2" },
    { id: 4, title: "Card 4", column: "Column 2" },
    { id: 5, title: "Card 5", column: "Column 3" },
    { id: 6, title: "Card 6", column: "Column 3" },
  ]);

  const handleDragStart = (e: any, id: any) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e: any, column: any) => {
    const id = e.dataTransfer.getData("text/plain");
    const updatedCards = cards.map((card) => {
      if (card.id == id) {
        card.column = column;
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <div className={styles.board}>
      <Column
        title="Column 1"
        cards={cards}
        handleDrop={handleDrop}
        handleDragStart={handleDragStart}
      />
      <Column
        title="Column 2"
        cards={cards}
        handleDrop={handleDrop}
        handleDragStart={handleDragStart}
      />
      <Column
        title="Column 3"
        cards={cards}
        handleDrop={handleDrop}
        handleDragStart={handleDragStart}
      />
    </div>
  );
};

export default Board;
