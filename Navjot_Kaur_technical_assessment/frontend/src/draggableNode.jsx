export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      draggable
      style={{
        cursor: "grab",
        padding: "10px 14px",
        borderRadius: "8px",
        background: "#4f46e5",
        color: "#fff",
        fontSize: "13px",
        fontWeight: "500",
        textAlign: "center",
        minWidth: "80px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        transition: "all 0.2s ease",
      }}
    >
      {label}
    </div>
  );
};