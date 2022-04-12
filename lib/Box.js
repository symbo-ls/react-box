import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import { useRef, useImperativeHandle, forwardRef } from 'react';

import Text from "./Text";
import { getElementFromAs, transformPropsToStyle } from './utils/utils'

var Box = function Box(props, ref) {
  var className = props.className,
    tag = props.tag,
    theme = props.theme,
    restProps = _objectWithoutProperties(props, ["tag", "className", "as"]);

  var domRef = useRef(null);
  useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var extraProps = _objectSpread({}, restProps);

  // if ('visible' in props) {
  //   extraProps.boxVisible = props.visible;
  // }

  var tag = props.tag || extraProps.tag || getElementFromAs(props.as) || extraProps.as ||  "div";

  var children = props.text ? props.text : props.children

  const style = transformPropsToStyle(extraProps)
  console.log(extraProps)
  return /*#__PURE__*/React.createElement(tag, _extends({
    className: className,
    ref: domRef,
    style: style
  }, 
  // extraProps
  ), children);
};

export default /*#__PURE__*/forwardRef(Box);