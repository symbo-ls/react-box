import React from "react";
import Box from "../index";

const Checkbox = (props) => {
  const defaultConf = {
    name: props.name,
    value: props.value,
    checked: props.checked,
    ...props,
  };
  return (
    <Box tag='input' type='checkbox' {...defaultConf}>
    </Box>
  );
};

export default Checkbox;