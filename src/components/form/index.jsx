import React from "react";
import { Form, Input, Button } from "antd";
import "./index.css";

function FormJS() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("foo", "bar");
    fetch("https://my-json-server.typicode.com/TserHub/Json/qinwm", {
      method: "post",
      body: formData
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="form-demo">
      <form onSubmit={handleSubmit}>
        <div className="zh">
          <p>
            <label htmlFor="username">用户名</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </p>
          <p>
            <label htmlFor="password">密码</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </p>
        </div>
        <div className="en">
          <p>
            <label htmlFor="message">message</label>
            <input
              type="text"
              name="message"
              id="message"
              value="This is message."
              readOnly
            />
          </p>
          <p>
            <label htmlFor="date">date</label>
            <input type="datetime-local" name="date" id="date" />
          </p>
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

function FormAntd() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      style={{
        width: 300
      }}
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        label="username"
        name="username"
        rules={[
          {
            required: true,
            whitespace: true,
            /* transform: (val) => {
              return val.replace(/^\s+|\s+$/g, "");
            }, */
            message: "Please input your username!"
          }
        ]}
        /* getValueFromEvent={(e) => {
          return e.target.value.replace(/^\s+|\s+$/g, "");
        }} */
        /* normalize={(value, prevValue, prevValues) => {
          // console.log(value, '=>', prevValue,'=>', prevValues);
          return value;
        }} */
      >
        <Input allowClear />
      </Form.Item>
      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
      >
        <Input.Password allowClear />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">submit</Button>
      </Form.Item>
    </Form>
  );
}

function FormDemo() {
  return (
    <>
      <FormJS />
      <FormAntd />
    </>
  );
}

export default FormDemo;
