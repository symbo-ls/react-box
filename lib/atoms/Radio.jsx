import React from "react";
import Box from "../index";

const Radio = (props) => {
  const defaultConf = {
    name: props.name,
    value: props.value,
    checked: props.checked,
    ...props,
  };
  return (
    <Box tag='input' type='radio' {...defaultConf}>
    </Box>
  );
};

export default Radio;