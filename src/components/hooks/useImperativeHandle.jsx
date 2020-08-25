import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Row, Col, Button, Input } from "antd";

const RefHandle = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        return inputRef.current.state.value;
      }
    };
  });
  return (
    <div>
      <Input ref={inputRef} />
    </div>
  );
});

export default function FancyInput() {
  const inputRef = useRef();
  const getValue = () => {
    console.log(inputRef.current.getValue());
  };
  return (
    <Row>
      <Col>
        <RefHandle ref={inputRef} />
      </Col>
      <Col>
        <Button onClick={getValue}>getValue</Button>
      </Col>
    </Row>
  );
}
