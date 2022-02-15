import React from "react";
import { Table } from "antd";

const dataSource = [
  {
    key: 1,
    id: 1,
    first_name: "FName",
    last_name: "LName",
    email: "test@gmail.com",
    status: "Regular",
    department: "",
  },
  {
    key: 2,
    id: 2,
    first_name: "FName2",
    last_name: "LName2",
    email: "test2@gmail.com",
    status: "Regular",
    department: "",
  },
  {
    key: 3,
    id: 3,
    first_name: "FName3",
    last_name: "LName3",
    email: "test3@gmail.com",
    status: "Regular",
    department: "",
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Department",
    dataIndex: "department",
  },
];

const Users = () => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} bordered />
    </div>
  );
};

export default Users;
