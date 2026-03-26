import { useState } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id }) => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);

  const extractVariables = (input) => {
    const matches =
      input.match(/{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g) || [];

    const cleaned = matches.map((v) =>
      v.replace(/{{\s*|\s*}}/g, "")
    );

    return [...new Set(cleaned)];
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    setVariables(extractVariables(value));
  };

  return (
    <div style={{ padding: 12, border: "2px solid #6366f1", borderRadius: 12 }}>
      <div style={{ fontWeight: "600" }}>Text Node</div>

      <textarea
        value={text}
        onChange={handleChange}
        rows={Math.max(2, text.split("\n").length)}
        style={{ width: "100%", marginTop: 5 }}
      />

      {variables.map((v, i) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={`${id}-${v}`}
          style={{
            top: `${(i + 1) * (100 / (variables.length + 1))}%`,
          }}
        />
      ))}

      <Handle type="source" position={Position.Right} id={`${id}-out`} />
    </div>
  );
};