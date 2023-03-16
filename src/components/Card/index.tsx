import React from "react";

import styles from "./index.module.css";

const Card = ({ id, title, onDragStart }: any) => {
  return (
    <div
      className={styles.card}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      <h4>{title}</h4>
    </div>
  );
};

export default Card;
