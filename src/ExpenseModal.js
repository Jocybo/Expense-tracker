import { Modal, Input, Button, Form, InputNumber, DatePicker } from "antd";
import React, { useState } from "react";
import ExpenseTable from "./ExpenseTable";

const ExpenseModal = () => {
  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
    let datas = [];
  const onFinish = (values) => {
    datas.push(values);
    console.log(datas);
  };

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
    <div>
      <Button type="primary" onClick={showModal} className="expensebtn">
        Add Expense
      </Button>
      <Modal title="Add Expense" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} >
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
            <Form.Item name={["category"]} label="Category">
              <Input />
            </Form.Item>
            <Form.Item name={["expensename"]} label="Expense Name" rules={[{ type: "text" }]}> 
              <Input />
            </Form.Item>
            <Form.Item name={["amount"]} label="Amount Spend" rules={[{ type: "number" }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item name={["date"]} label="Date of Transaction">
              <DatePicker />
            </Form.Item>
            <Form.Item name={["description"]} label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
        </Form>
      </Modal>
      <ExpenseTable user={datas}/>
    </div>
  );
};

export default ExpenseModal;
