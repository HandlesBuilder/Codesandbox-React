import React, { useRef, useState, useEffect } from "react";
import { Tooltip } from "antd";
import { useLayOut } from "../../utils/utils";
import "./index.css";

const str = "这是一段很长的文字，用来做长文本超出省略测试，动态判断是否超出。";

function Text(props) {
  const { text } = props;
  const testRef = useRef();
  const [bool, setBool] = useState(false);
  const { width } = useLayOut();

  useEffect(() => {
    /* {
      x: 184.5,
      y: 140.5,
      width: 448,
      height: 20,
      top: 140.5,
      right: 632.5,
      bottom: 160.5,
      left: 184.5
    } */
    const { width: childW } = testRef.current.getBoundingClientRect();
    const {
      width: parentW
    } = testRef.current.parentNode.getBoundingClientRect();
    setBool(childW > parentW);
  }, [width]);

  return (
    <div className="overflow-container">
      <span className="hidden-text" ref={testRef}>
        {text}
      </span>
      {bool ? (
        <Tooltip title={text}>
          <span className="show-tips-text">{text}</span>
        </Tooltip>
      ) : (
        <span className="hide-tips-text">{text}</span>
      )}
    </div>
  );
}

function OverFlow(props) {
  const { text } = props;
  return (
    <div className="overflow">
      <Text text={text} />
    </div>
  );
}

export default function Comp() {
  return <OverFlow text={str} />;
}
