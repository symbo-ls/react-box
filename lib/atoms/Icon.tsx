import React from "react";
import Svg from "./Svg";

const Icon = (props, children) => {
 
  return (
    <Svg {...props}>
      {props.name ? <use xlinkHref={props.name} /> : children}
    </Svg>
  );
};

export default Icon;
