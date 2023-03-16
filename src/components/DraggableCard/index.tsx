import React from "react";

const DraggableCard = ({ id, text, onDragStart }: any) => {
  return (
    <div
      id={id}
      draggable="true"
      onDragStart={onDragStart}
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "white",
        marginBottom: "10px",
      }}
    >
      {text}
    </div>
  );
};

export default DraggableCard;
