import React, { useState, useEffect } from "react";
import { Form, Popover, Input, Row, Col, Button, message } from "antd";
import { ChromePicker } from "react-color";
import "./styles.css";

const ColorPicker = (props) => {
  const { defaultColor = "#000000" } = props;
  const [color, setColor] = useState(defaultColor);
  const onChangeComplete = (value, event) => {
    setColor(value.hex);
    props.onChange(value.hex);
  };

  useEffect(() => {
    props.onChange(color);
    // eslint-disable-next-line
  }, []);

  return (
    <Popover
      content={
        <ChromePicker color={color} onChangeComplete={onChangeComplete} />
      }
    >
      <Input
        {...props}
        readOnly
        style={{ width: 125 }}
        addonAfter={
          <div style={{ width: 15, height: 15, backgroundColor: color }}></div>
        }
      />
    </Popover>
  );
};

function App() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    message.success(values.color);
  };
  return (
    <div className="App">
      <Form layout="inline" form={form} onFinish={onFinish}>
        <Form.Item label="Color" name="color">
          <ColorPicker />
        </Form.Item>
        <Form.Item>
          <Row gutter={[10, 0]}>
            <Col>
              <Button onClick={() => form.resetFields()}>Reset</Button>
            </Col>
            <Col>
              <Button htmlType="submit">Submit</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
