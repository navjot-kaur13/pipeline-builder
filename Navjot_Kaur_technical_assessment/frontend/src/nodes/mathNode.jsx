import { BaseNode } from "./BaseNode";

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      title="Math"
      description="Math Operation"
      color="#ec4899"
      inputs={[{ id: `${id}-in1` }, { id: `${id}-in2` }]}
      outputs={[{ id: `${id}-out` }]}
    />
  );
};