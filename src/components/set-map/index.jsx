import React from "react";

export default function SetMap() {
  const s = new Set(["foo", "bar", "foo"]);
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
    </div>
  );
}
