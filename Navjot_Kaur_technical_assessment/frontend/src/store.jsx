import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

export const useStore = create((set) => ({
  nodes: [],
  edges: [],

  // ➕ Add new node
  addNode: (node) =>
    set((state) => ({
      nodes: [...state.nodes, node],
    })),

  // 🔄 Node updates
  onNodesChange: (changes) =>
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
    })),

  // 🔄 Edge updates
  onEdgesChange: (changes) =>
    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    })),

  // 🔥 CONNECTION FIX (MOST IMPORTANT)
  onConnect: (connection) => {
    console.log("Connecting:", connection); // DEBUG

    set((state) => ({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
        },
        state.edges
      ),
    }));
  },
}));