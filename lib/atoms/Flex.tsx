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
    },
    ...props,
  };

  const flexProps = {
    display: 'flex',
    flexFlow: props.flexFlow,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent
  }

  return (
    <Box className={transformEmotion(transformClassname(defaultProps, flexProps))}>
      {children}
    </Box>
  );
};

export default Flex;
