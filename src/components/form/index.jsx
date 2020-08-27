import React from "react";
import "./index.css";

export default function FormDemo() {
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
