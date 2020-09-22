import React from "react";
import styles from "./index.less";

export default function ClassName() {
  return (
    <div>
      <p className={[styles["font-size"], styles.color].join(" ")}>
        Hello, CodeSandbox!
      </p>
      <p className={`${styles["font-size"]} ${styles.color}`}>
        Hello, CodeSandbox!
      </p>
    </div>
  );
}
