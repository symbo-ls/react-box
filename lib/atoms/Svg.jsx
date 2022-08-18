import React from "react";
import Box from "../index";
import { transformEmotion, transformClassname} from 'css-in-props' 


const Svg = (props) => {
  const defaultConf = {
    attr: {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink'
    },
    ...props,
  };
  return (
    <Box tag="svg" className={transformEmotion(transformClassname(defaultConf))}>
      <use xlinkHref={props.name} />
    </Box>
  );
};

export default Svg;
