import React from "react";
import "./index.css";

const items = [1, 2, 3];
export default function Flex() {
  return (
    <div className="flex-container">
      {items.map((item, index) => (
        <div key={item} className="flex-item">
          <span className="item-content">{item}</span>
        </div>
      ))}
    </div>
  );
}
