import { BaseNode } from "./BaseNode";

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      description="API Call"
      color="#f97316"
      inputs={[{ id: `${id}-in` }]}
      outputs={[{ id: `${id}-out` }]}
    />
  );
};