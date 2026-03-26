import { BaseNode } from "./BaseNode.jsx";

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      title="Filter"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-out` }]}
    >
      <div>Filter Data</div>
    </BaseNode>
  );
};