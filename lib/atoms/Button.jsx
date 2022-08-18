import React from "react";
import IconText from "./IconText";

export const Button = (props, children) => {
 
  return (
    <IconText tag="button" {...props}>
      {children}
    </IconText>
  );
};
 
