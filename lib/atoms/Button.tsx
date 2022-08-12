import React from "react";
import Box from "../index";
import { transformEmotion, transformClassname } from 'css-in-props' 

export const Button = (props, children) => {
  const defaultProps = {
    tag: "button",
    props: {
      theme: "primary",
      padding: "A",
      background: "#123",
      margin: "D",
    },
    ...props,
  };
  return (
    <Box className={transformEmotion(transformClassname(defaultProps))} >
      {children}
    </Box>
  );
};
 
