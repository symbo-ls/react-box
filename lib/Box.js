import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import { useRef, useImperativeHandle, forwardRef } from 'react';
import { mapSpacing, getTheme, getColor } from '@symbo.ls/scratch'


var Box = function Box(props, ref) {
  var children = props.children,
    className= props.className,
    tag = props.tag,
    color = props.color,
    theme = props.theme,
    restProps = _objectWithoutProperties(props, ["tag", "theme", "className"]);

  var domRef = useRef(null);
  useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var extraProps = _objectSpread({}, restProps);

  // if ('visible' in props) {
  //   extraProps.boxVisible = props.visible;
  // }

  var tag = props.tag || extraProps.tag || "div";
 
 
  return /*#__PURE__*/React.createElement(tag, _extends({
      className: className,
      ref: domRef,
      style: {
        color: color && getColor(color),
      }
  }, extraProps), children);
};

export default /*#__PURE__*/forwardRef(Box);