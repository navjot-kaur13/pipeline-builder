import React, { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

import { useStore } from "./store";

// Core nodes
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";

// Extra nodes
import { ApiNode } from "./nodes/apiNode";
import { MathNode } from "./nodes/mathNode";

// 🔥 Node type mapping (VERY IMPORTANT)
const nodeTypes = {
  inputNode: InputNode,
  llmNode: LLMNode,
  outputNode: OutputNode,
  textNode: TextNode,
  apiNode: ApiNode,
  mathNode: MathNode,
};

export const PipelineUI = () => {
  const { nodes, edges, addNode, onNodesChange, onEdgesChange, onConnect } =
    useStore();

  // Allow drop
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // Handle drop
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const data = event.dataTransfer.getData("application/reactflow");
      if (!data) return;

      const { nodeType } = JSON.parse(data);

      const newNode = {
        id: `${nodeType}-${Date.now()}`,
        type: nodeType,
        position: {
          x: event.clientX - 250,
          y: event.clientY - 100,
        },
        data: {},
      };

      addNode(newNode);
    },
    [addNode]
  );

  return (
    <ReactFlowProvider>
      <div
        style={{
          width: "100%",
          height: "75vh",
          background: "#f4f6f8",
          borderRadius: "10px",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <Controls />
          <Background gap={16} size={1} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};