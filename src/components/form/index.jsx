import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
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

/* const InputComp = (props) => {
  const { value } = props;
  const { form, ...rest } = props;
  const [bordered, setBordered] = useState(false);
  const [editing, setEditing] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const inputRef = useRef();
  const handleFocus = (e) => {
    setBordered(true);
    setShowEdit(false);
    setEditing(true);
  };
  const handleBlur = (e) => {
    const bool = !e.target.value;
    setBordered(bool);
    setEditing(bool);
  };
  const handleEnter = () => {
    console.log("enter");
    if (!editing) {
      setShowEdit(true);
    }
  };
  const handleLeave = () => {
    console.log("leave");
    if (!editing) {
      setShowEdit(false);
    }
  };
  const handleEdit = () => {
    inputRef.current.focus();
    setShowEdit(false);
    setEditing(true);
  };
  useEffect(() => {
    console.log("value:", value);
    if (!value) {
      setBordered(true);
      setShowEdit(false);
      setEditing(true);
      form.validateFields();
    }
  }, [value, form]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Input
        ref={inputRef}
        {...rest}
        // allowClear
        placeholder="username"
        bordered={bordered}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showEdit ? <EditOutlined onClick={handleEdit} /> : null}
    </div>
  );
}; */

const AgeInputComp = (props) => {
  const { value } = props;
  const { name, form, ...rest } = props;
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const handleBlur = (e) => {
    setEditing(!e.target.value);
  };
  const handleEdit = () => {
    setEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 350);
  };
  const handleEnterKey = (e) => {
    if (e.nativeEvent.key === "Enter") {
      e.preventDefault();
      setEditing(!e.target.value);
      if (e.target.value) inputRef.current.blur();
    }
  };
  useEffect(() => {
    if (!value) {
      setEditing(true);
      form.validateFields([name]);
    }
  }, [value, name, form]);
  return (
    <>
      {!editing ? (
        <Space style={{ width: "100%" }} align="start">
          <span>{value}</span>
          <EditOutlined onClick={handleEdit} />
        </Space>
      ) : null}
      <Input
        ref={inputRef}
        style={{ display: !editing ? "none" : "inline-flex" }}
        {...rest}
        // allowClear
        onBlur={handleBlur}
        onKeyPress={handleEnterKey}
      />
    </>
  );
};

function FormAntd() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  const onFinishFailed = ({ values, errorFields, outOfDate }) => {
    console.log({ values, errorFields, outOfDate });
  };

  return (
    <Form
      style={{
        width: 300
      }}
      labelAlign="right"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        username: "1234",
        password: "1234",
        age: ""
      }}
    >
      <Form.Item
        // noStyle
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
        // help="Please input your username!!"
        // extra="Please input your username!!!"
        /* getValueFromEvent={(e) => {
          return e.target.value.replace(/^\s+|\s+$/g, "");
        }} */
        /* normalize={(value, prevValue, prevValues) => {
          // console.log(value, '=>', prevValue,'=>', prevValues);
          return value;
        }} */
      >
        <Input placeholder="username" allowClear />
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
        <Input.Password allowClear placeholder="password" />
      </Form.Item>
      <Form.Item
        label="age"
        name="age"
        rules={[
          {
            required: true,
            message: "Please input your age!"
          }
        ]}
      >
        <AgeInputComp name="age" form={form} />
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
