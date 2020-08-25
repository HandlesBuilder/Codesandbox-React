import React from "react";
import { useHooks } from "./components/hooks";
import RefHandle from "./components/hooks/useImperativeHandle";
import "./styles.css";

export default function App() {
  const state = useHooks();
  return (
    <div className="App">
      <h1>Hello {state.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <RefHandle />
    </div>
  );
}
