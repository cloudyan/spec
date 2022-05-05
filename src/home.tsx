import React from 'react';

const DemoItem = (props) => {
  return (
    <>
      <div>{JSON.stringify(props)}</div>
    </>
  );
};

export default (props) => {
  const { componentName } = props;

  return (
    <>
      <DemoItem componentName={componentName}></DemoItem>
    </>
  );
};
