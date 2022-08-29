import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import ExpenseModal from "./ExpenseModal";

const ExpenseTable = () => {
  const getData = (d) => {
    let user = {
      category: "Travel",
      expensename: d.expensename,
      amount: d.amount,
      dateoftransaction: d.date,
      description: d.description,
    };
    console.log(user);
  };
  const data = [
    {
      key: "1",
      category: "Food",
      expensename: "Fried chicken",
      amount: "500",
      dateoftransaction: "23-07-2022",
      description: "None",
    },
    {
      key: "2",
      category: "Transport",
      expensename: "Car",
      amount: "1000",
      dateoftransaction: "28-07-2022",
      description: "None",
    },
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
    <div>
      <div className="table">
        <Table dataSource={data} columns={columns} pagination={false} />
      </div>
      <div>
        <ExpenseModal getData={getData} />
      </div>
    </div>
  );
};

export default ExpenseTable;
