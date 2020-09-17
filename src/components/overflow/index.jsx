import React, { useRef, useState, useEffect } from "react";
import { Tooltip } from "antd";
import { debounce } from "lodash";
import "./index.css";

const str = "这是一段很长的文字，用来做长文本超出省略测试，动态判断是否超出。";

const style = {
  display: "inline-block",
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

function Test() {
  const testRef = useRef();
  const [bool, setBool] = useState(false);
  console.log(bool);

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
    // 另需 resize 功能
    const { width } = testRef.current.getBoundingClientRect();
    const { width: wP } = testRef.current.parentNode.getBoundingClientRect();
    console.log(width, wP);
    setBool(width > wP);
  }, []);
  return (
    <div className="overflow-container">
      {!bool ? (
        <span style={{ whiteSpace: "nowrap" }} ref={testRef}>
          {str}
        </span>
      ) : (
        <Tooltip title="test">
          <span style={style}>{str}</span>
        </Tooltip>
      )}
    </div>
  );
}

function OverFlow(props) {
  const { text } = props;
  const txtRef = useRef();

  const [hasTips, setHasTips] = useState(false);

  useEffect(() => {
    const calculateLayout = debounce(() => {
      const baseWidth = window.getComputedStyle(txtRef.current).width;
      const baseFontSize = window.getComputedStyle(txtRef.current).fontSize;
      console.log(baseWidth, baseFontSize);
      const strNum = Math.floor(
        +baseWidth.slice(0, -2) / +baseFontSize.slice(0, -2)
      );
      console.log(text.length, strNum);
      setHasTips(text.length > strNum);
    }, 500);
    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => {
      window.removeEventListener("resize", calculateLayout);
    };
  }, [text.length]);

  return (
    <>
      <div className="overflow">
        {hasTips ? (
          <Tooltip title={text}>
            <p ref={txtRef}>{text}</p>
          </Tooltip>
        ) : (
          <p ref={txtRef}>{text}</p>
        )}
        <Test />
      </div>
      {/* <Test /> */}
    </>
  );
}

export default function Comp() {
  return <OverFlow text={str} />;
}
