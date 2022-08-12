import React from "react";
import Box from "../index";
import { transformEmotion, transformClassname } from 'css-in-props' 

export const Button = (props, children) => {
  const buttonConf = {
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
    <Box className={transformEmotion(transformClassname(buttonConf))}>
      {children}
    </Box>
  );
};
 
