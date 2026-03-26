import { BaseNode } from "./BaseNode";

export const InputNode = ({ id }) => {
  return (
    <BaseNode
      title="Input"
      description="User input"
      color="#3b82f6"
      outputs={[{ id: `${id}-out` }]}
    />
  );
};