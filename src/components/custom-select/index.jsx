import React from "react";
import { Row, Col, Select, Divider, Pagination } from "antd";

class CustomSelect extends React.Component {
  state = {
    items: ["jack", "lucy", "dd", "aa", "dkj", "ddd", "ddsadfa"],
    name: "",
    current: 1,
    value: ""
  };

  render() {
    const { value, current, items } = this.state;
    return (
      <Select
        value={value}
        showSearch
        optionLabelProp="label"
        onChange={(value) => {
          this.setState((prevState) => {
            return {
              ...prevState,
              value
            };
          });
        }}
        style={{ width: 300 }}
        placeholder="custom dropdown render"
        dropdownRender={(menu) => (
          <div>
            {menu}
            <Divider style={{ margin: "4px 0" }} />
            <Pagination
              current={current}
              defaultPageSize={2}
              total={items.length}
              onChange={(page, pageSize) => {
                this.setState((prevState) => {
                  return {
                    ...prevState,
                    current: page
                  };
                });
              }}
            />
          </div>
        )}
      >
        {items.slice(2 * (current - 1), 2 * (current - 1) + 2).map((item) => (
          <Select.Option key={item} label={item} value={item}>
            <Row>
              <Col span={12}>{item}</Col>
              <Col span={12}>{item}</Col>
            </Row>
          </Select.Option>
        ))}
      </Select>
    );
  }
}

export default CustomSelect;
