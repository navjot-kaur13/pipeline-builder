import { BaseNode } from "./BaseNode.jsx";

export const ImageNode = ({ id }) => {
  return (
    <BaseNode
      title="Image"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-out` }]}
    >
      <div>Image Processing</div>
    </BaseNode>
  );
};