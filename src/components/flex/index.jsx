import React, { useState } from "react";
import "./index.css";

const defaultItems = [
  {
    content: 1,
    order: 1
  },
  {
    content: 2,
    order: 2
  },
  {
    content: 3,
    order: 3
  }
];
export default function Flex() {
  const [items, setItems] = useState(defaultItems);
  const setOrder = (idx, type) => {
    if (idx === 0 || idx === items.length - 1) return;
    switch (type) {
      case "up": {
        setItems((prevState) => {
          const arr = JSON.parse(JSON.stringify(prevState));
          const item = arr[idx];
          const prevItem = arr[idx - 1];
          item.order -= 1;
          prevItem.order += 1;
          arr[idx] = item;
          arr[idx - 1] = prevItem;
          return arr;
        });
        break;
      }
      case "down":
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex-container">
      {items.map((item, index) => (
        <div className="flex-item" style={{ order: item.order }}>
          <span className="item-content">{item.content}</span>
          <button onClick={setOrder(index, "up")}>上</button>
          <button onClick={(setOrder(index), "down")}>下</button>
        </div>
      ))}
    </div>
  );
}
