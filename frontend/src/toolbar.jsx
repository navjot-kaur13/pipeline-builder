export const PipelineToolbar = () => {
  const onDragStart = (event, type) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType: type })
    );
  };

  return (
    <div style={{ display: "flex", gap: 10, padding: 10 }}>
      <button draggable onDragStart={(e) => onDragStart(e, "inputNode")}>
        Input
      </button>
      <button draggable onDragStart={(e) => onDragStart(e, "llmNode")}>
        LLM
      </button>
      <button draggable onDragStart={(e) => onDragStart(e, "outputNode")}>
        Output
      </button>
      <button draggable onDragStart={(e) => onDragStart(e, "textNode")}>
        Text
      </button>

      {/* NEW NODES */}
      <button draggable onDragStart={(e) => onDragStart(e, "apiNode")}>
        API
      </button>
      <button draggable onDragStart={(e) => onDragStart(e, "mathNode")}>
        Math
      </button>
    </div>
  );
};