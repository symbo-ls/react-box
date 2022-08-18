import React from "react";
import Flex from "./flex";
import Icon from "./Icon";
import Text from "./Text";

const IconText = (props, children) => {

  return (
    <Flex alignItems="center" {...props}>
      <Icon name={props.name} {...props.icon} />
      <Text text={props.text} />
      {children}
    </Flex>
  );
};

export default IconText;
