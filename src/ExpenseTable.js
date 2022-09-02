import { Modal, Input, Button, Form, InputNumber} from "antd";
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const ExpenseTable = () => {
  const [form] = Form.useForm();
  const [userData,setuserData] = useState([]);

  const onFinish = (values) => {
    setuserData([...userData,values]);
    setIsModalVisible(false);
    form.resetFields();
  };  

  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Expense Name",
      dataIndex: "expensename",
      key: "expensename",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date of Transaction" ,
      dataIndex: "dateoftransaction",
      key: "dateoftransaction",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      render:()=>{
        return <>
          <EditOutlined style={{color:"blue"}}/>
          <DeleteOutlined style={{color:"red",marginLeft: 20}}/>
        </>
      }
    }
  ];

  return (
    <div>
        <div>
          <Button type="primary" onClick={showModal} className="expensebtn">
            Add Expense
          </Button>
        </div>
        <div>
          <Modal title="Add Expense" visible={isModalVisible} footer={null} onCancel={handleCancel}>
            
            <Form {...layout} name="nest-messages" onFinish={onFinish}>

                <Form.Item name={["category"]} label="Category" className="category" > 
                  <Input />
                </Form.Item>

                <Form.Item name={["expensename"]} label="Expense Name" rules={[{ type: "text" }]}>
                  <Input />
                </Form.Item>

                <Form.Item name={["amount"]} label="Amount Spend" rules={[{ type: "number" }]}>
                  <InputNumber/>   
                </Form.Item>

                <Form.Item name={["dateoftransaction"]} label="Date of Transaction">
                  <input type={"date"} />
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
        </div>
        <div className="table">
          <Table dataSource={userData} columns={columns} pagination={false} /> 
        </div>
    </div>
  );
};

export default ExpenseTable;
