import React from "react";
import Box from "../index";
import { transformEmotion, transformClassname} from 'css-in-props' 

const Flex = (props, children) => {
  const defaultProps = {
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
    <Box className={transformEmotion(transformClassname(defaultProps))}>
      {children}
    </Box>
  );
};

export default Flex;
