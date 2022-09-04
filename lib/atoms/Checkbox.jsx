import React from "react";
import Box from "../index";
import Text from "./Text"

const Checkbox = (props) => {
  const defaultConf = {
    name: props.name,
    value: props.value,
    checked: props.checked,
    ...props,
  };
  return (
    <Box>  
      <Box tag='input' type='checkbox' {...defaultConf} />
      <Text>{props.label}</Text>
    </Box>
  );
};

export default Checkbox;