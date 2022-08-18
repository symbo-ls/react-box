import React from "react";
import IconText from "./IconText";

export const Button = (props) => {
 
  return (
    <IconText tag="button" {...props}>
      {props.children}
    </IconText>
  );
};
 
