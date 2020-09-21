import React, { useEffect } from "react";

const s = new Set(["foo", "bar", "foo"]);
// const m = new Map([["foo", "bar"]]);

export default function SetMap() {
  useEffect(() => {
    for (let item of s.keys()) {
      console.log(item);
    }
    console.log("--");
    for (let item of s.values()) {
      console.log(item);
    }
    console.log("==");
    for (let item of s.entries()) {
      console.log(item);
    }

    // Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
    console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);
    // 则可以直接用for...of循环遍历 Set。
    for (let item of s) {
      console.log(item);
    }

    s.forEach((value, key) => console.log(key + " : " + value));
  }, []);

  return (
    <div>
      <p>Set: {JSON.stringify([...s])}</p>
      <p>Set.size: {s.size}</p>
      <button
        onClick={() => {
          s.delete("bar");
          alert(JSON.stringify([...s]));
        }}
      >
        set -&gt; delete()
      </button>
      <button
        onClick={() => {
          alert(s.has("foo"));
        }}
      >
        set -&gt; has()
      </button>
      <button
        onClick={() => {
          s.clear();
          alert(JSON.stringify([...s]));
        }}
      >
        set -&gt; clear()
      </button>
      <br />
      {/* <p>Map: {JSON.stringify(...m)}</p> */}
    </div>
  );
}
