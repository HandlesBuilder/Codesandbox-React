import React from "react";
import styles from "./index.css";

export default function ClassName() {
  return (
    <div className={[styles["font-size"], styles.color]}>
      <p>Hello, CodeSandbox!</p>
    </div>
  );
}
