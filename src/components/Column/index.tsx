import React from "react";

import Card from "../Card";
import styles from "./index.module.css";

const Column = ({ title, cards, handleDrop, handleDragStart }: any) => {
  return (
    <div
      className={styles.column}
      onDrop={(e) => handleDrop(e, title)}
      onDragOver={(e) => e.preventDefault()}
    >
      <h3>{title}</h3>
      {cards
        .filter((card: any) => card.column === title)
        .map((card: any) => (
          <Card
            key={card.id}
            id={card.id}
            onDragStart={handleDragStart}
            title={card.title}
          />
        ))}
    </div>
  );
};

export default Column;
