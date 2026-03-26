import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  description,
  inputs = [],
  outputs = [],
  color = "#6366f1",
}) => {
  return (
    <div
      style={{
        minWidth: 220,
        padding: 14,
        borderRadius: 12,
        border: `2px solid ${color}`,
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        fontSize: "13px",
        transition: "all 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div style={{ fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: "12px", marginBottom: 8 }}>{description}</div>

      {inputs.map((inp, i) => (
        <Handle
          key={inp.id}
          type="target"
          position={Position.Left}
          id={inp.id}
          style={{
            top: `${(i + 1) * (100 / (inputs.length + 1))}%`,
          }}
        />
      ))}

      {outputs.map((out, i) => (
        <Handle
          key={out.id}
          type="source"
          position={Position.Right}
          id={out.id}
          style={{
            top: `${(i + 1) * (100 / (outputs.length + 1))}%`,
          }}
        />
      ))}
    </div>
  );
};