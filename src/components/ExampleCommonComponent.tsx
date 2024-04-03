import React from "react";

interface IExampleCommonComponent {
  exampleProp: string;
}

const ExampleCommonComponent: React.FC<IExampleCommonComponent> = ({
  exampleProp,
}) => {
  return <div className="ex-common-component">{exampleProp}</div>;
};

export default ExampleCommonComponent;
