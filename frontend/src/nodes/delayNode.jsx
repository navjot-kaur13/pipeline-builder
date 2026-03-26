import { BaseNode } from "./BaseNode.jsx";

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-out` }]}
    >
      <div>Delay Execution</div>
    </BaseNode>
  );
};