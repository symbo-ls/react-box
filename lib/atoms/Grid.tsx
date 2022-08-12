import React from "react";
import Box from "../index";
import { transformEmotion, transformClassname} from 'css-in-props' 

const Flex = (props, children) => {
  const buttonConf = {
    tag: "div",
    props: {
      theme: "primary",
      padding: "A",
      margin: "D",
      display: "grid"
    },
    ...props,
  };
  return (
    <Box className={transformEmotion(transformClassname(buttonConf))}>
      {children}
    </Box>
  );
};

export default Flex;
