import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const ExpenseTable = (user) => {
  console.log(user);
  const data = [
    {
      key : '',
      category: "",
      expensename: "",
      amount: "",
      dateoftransaction: "",
      description: "",
    }
  ];

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
      title: "Date of Transaction",
      dataIndex: "dateoftransaction",
      key: "dateoftransaction",
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  return (
      <div className="table">
        <Table dataSource={data} columns={columns} pagination={false} />
        {/* <button onClick={check}>Check</button> */}
      </div>
  );
};

export default ExpenseTable;
