import React, { useState } from "react";

export default function ArrayHandler() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const changeArr = (current, target) => {
    setArr((prevState) => {
      const newArr = [...prevState];
      newArr[target] = newArr.splice(current, 1, newArr[target])[0];
      return newArr;
    });
  };

  return (
    <div>
      <h3>交换两个数组元素位置</h3>
      <p>{JSON.stringify(arr)}</p>
      <button onClick={() => changeArr(1, 3)}>change</button>
    </div>
  );
}
