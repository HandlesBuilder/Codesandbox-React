import React, { useRef, useState, useEffect } from "react";
import { Tooltip } from "antd";
import { debounce } from "lodash";
import "./index.css";

const str = "这是一段很长的文字，用来做长文本超出省略测试，动态判断是否超出。";

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
    <div className="overflow">
      {hasTips ? (
        <Tooltip title={text}>
          <p ref={txtRef}>{text}</p>
        </Tooltip>
      ) : (
        <p ref={txtRef}>{text}</p>
      )}
    </div>
  );
}

export default function Comp() {
  return <OverFlow text={str} />;
}
