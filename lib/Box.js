import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from "react";
import { useRef, useImperativeHandle, forwardRef } from "react";
import { transformClassname, transformEmotion } from 'css-in-props'

import {
  deletePropsFromExtra
} from "./utils/utils";

var Box = function Box(props, ref) {
  var className = props.className,
    tag = props.tag,
    theme = props.theme,
    href = props.href,
    target = props.target,
    ariaLabel = props.ariaLabel,
    src = props.src,
    alt = props.alt,
    title = props.title,
    restProps = _objectWithoutProperties(props, ["tag", "className"]);

  var domRef = useRef(null);
  useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var extraProps = _objectSpread({}, restProps, restProps.props);

  var tag = props.tag || extraProps.tag || "div";

  var children = props.text ? props.text : props.children;

  deletePropsFromExtra(extraProps);

  const propsClass = transformEmotion(transformClassname(props)) 

  const style = { ...props.style  };

  return /*#__PURE__*/ React.createElement(
    tag,
    _extends({
      className: `${className ?? ""} ${propsClass}` ,
      ref: domRef,
      style: style,
      href,
      target,
      src,
      alt,
      title,
      "aria-label": ariaLabel,
    }),
    children
  );
};

export default /*#__PURE__*/ forwardRef(Box);
