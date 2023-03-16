const DropZone = ({ onDrop, onDragOver }: any) => {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      style={{
        width: "100%",
        height: "300px",
        border: "1px dashed black",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "lightgrey",
      }}
    >
      Drop your cards here!
    </div>
  );
};

export default DropZone;
