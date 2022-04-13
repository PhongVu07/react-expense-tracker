import React from "react";
import { Table, TableColumnsType, Space } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { IExpense } from "types";
import { useStore } from "provider";
import dayjs from "dayjs";
import { ActionType } from "../../constants";

const ExpenseList = () => {
  const {
    state: { expenses = [] },
    dispatch,
  } = useStore();

  const tableExpensesData = expenses.map((expense: IExpense) => ({
    ...expense,
    action: (
      <DeleteFilled
        onClick={() =>
          dispatch({
            type: ActionType.DELETE,
            payload: { id: expense.id },
          })
        }
      />
    ),
  }));

  const columns: TableColumnsType<any> = [
    {
      title: "Expense",
      dataIndex: "expenseName",
      key: "expenseName",
      sorter: {
        compare: (a, b) => a.expenseName.localeCompare(b.expenseName),
      },
      width: "30%",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      sorter: {
        compare: (a, b) => a.amount - b.amount,
      },
      width: "20%",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: {
        compare: (a, b) => dayjs(a.date).diff(dayjs(b.date)),
      },
      width: "20%",
      render: (date) => <div>{dayjs(date).format("DD/MM/YYYY")}</div>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      sorter: {
        compare: (a, b) => a.type.localeCompare(b.type),
      },
      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "10%",
    },
  ];

  return (
    <>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={tableExpensesData}
        pagination={{ position: ["bottomCenter"], pageSize: 5 }}
      />
    </>
  );
};

export default ExpenseList;
