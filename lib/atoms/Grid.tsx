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

  const gridProps = {
    display: "grid",
    columns: props.columns,
    rows: props.rows,
    area: props.area,
    template: props.template,
    templateAreas: props.templateAreas,
    gap: props.gap,
    columnGap: props.template,
    rowGap: props.template
  }

  return (
    <Box className={transformEmotion(transformClassname(defaultProps, gridProps))}>
      {children}
    </Box>
  );
};

export default Flex;
