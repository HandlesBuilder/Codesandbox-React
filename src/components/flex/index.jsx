import React, { useState } from "react";
import "./index.css";

export default function Flex() {
  const [blocks, setBlocks] = useState([3, 7, 9, 1, 5]);

  const handleChange = (idx) => {
    setBlocks((prevState) => {
      return prevState.map((item, index) => {
        if (index === idx) {
          return 0;
        }
        return item;
      });
    });
  };

  return (
    <div className="flex-container">
      {blocks.map((item, index) => (
        <div key={item} className="flex-item" style={{ order: item }}>
          <p className="item-content">
            index:{index}-item:{item}
          </p>
          {index === 2 ? (
            <button onClick={() => handleChange(index)}>Top</button>
          ) : null}
        </div>
      ))}
    </div>
  );
}
