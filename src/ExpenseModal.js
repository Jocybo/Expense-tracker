  import { Modal, Input, Button, Form, InputNumber, DatePicker } from "antd";
  import React, { useState } from "react";

  const ExpenseModal = () => {
    const [userData, setuserData] = useState();

    const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

    const onFinish = (values) => {
      let datas=[];
      datas.push(values);
      console.log(datas);
      setuserData(...datas);
      // console.log(values);
    };
    // console.log({userData});

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    const handleOk = () => {
      setIsModalVisible(false);
    };
    return (
      <>
        <Button type="primary" onClick={showModal} className="expensebtn">
          Add Expense
        </Button>
        <Modal
          title="Add Expense"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form {...layout} name="nest-messages" onFinish={onFinish}>
            <Form.Item name={["user", "category"]} label="Category">
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "expensename"]}
              label="Expense Name"
              rules={[{ type: "text" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "amount"]}
              label="Amount Spend"
              rules={[{ type: "number" }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={["user", "date"]} label="Date of Transaction">
              <DatePicker />
            </Form.Item>
            <Form.Item name={["user", "description"]} label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  };

  export default ExpenseModal;
