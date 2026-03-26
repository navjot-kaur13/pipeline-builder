import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id }) => {
  return (
    <BaseNode
      title="Output"
      inputs={[
        { id: `${id}-input` }
      ]}
    >
      <div>Output Node</div>
    </BaseNode>
  );
};