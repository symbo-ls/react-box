import React from "react";

const Text = (props, children) => {
  return (
    <>
      {props.text || children}
    </>
  );
};

export default Text;
