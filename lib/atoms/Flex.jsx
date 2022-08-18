import React from "react";
import Box from "../index";
import { transformEmotion, transformClassname} from 'css-in-props' 

const Flex = (props, children) => {

  const flexProps = {
    display: 'flex',
    flexFlow: props.flexFlow,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent
  }

  return (
    <Box className={transformEmotion(transformClassname(props, flexProps))}>
      {children}
    </Box>
  );
};

export default Flex;
