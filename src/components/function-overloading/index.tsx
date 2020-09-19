import React from "react";

function fn(param: string): string;
function fn(param: number, bool: boolean): number;

function fn(param: string | number, bool?: boolean): any {
  if (typeof param === "string") {
    return "Hello, world!";
  } else {
    return bool ? param + 1 : param - 1;
  }
}

export default function FnOverloading() {
  return (
    <div>
      <h2>Function Overloading:</h2>
      <p>
        <code>function fn(param: string): string;</code>
      </p>
      <p>
        <code>fn("1")</code>
      </p>
      <p>{fn("1")}</p>
      <p>
        <code>function fn(param: number, bool: boolean): number;</code>
      </p>
      <p>
        <code>fn(1, true)</code>
      </p>
      <p>{fn(1, true)}</p>
    </div>
  );
}
