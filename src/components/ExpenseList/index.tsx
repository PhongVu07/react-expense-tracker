import React from "react";
import { Table, TableColumnsType } from "antd";
import { IExpense } from "types";
import { useStore } from "provider";
import moment from "moment";
import { ActionType } from "../../constants";
import { ComponentContainer, DeleteIcon } from "./expenseList.style";

const ExpenseList = () => {
  const {
    state: { expenses = [] },
    dispatch,
  } = useStore();

  const tableExpensesData = expenses
    .map((expense: IExpense) => ({
      ...expense,
      action: (
        <DeleteIcon
          onClick={() =>
            dispatch({
              type: ActionType.DELETE,
              payload: { id: expense.id },
            })
          }
        />
      ),
    }))
    .sort((a, b) => moment(b.date).diff(a.date));

  const columns: TableColumnsType<any> = [
    {
      title: "Expense",
      dataIndex: "expenseName",
      key: "expenseName",
      sorter: {
        compare: (a, b) => a.expenseName.localeCompare(b.expenseName),
      },
      width: "25%",
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
        compare: (a, b) => moment(a.date).diff(moment(b.date)),
      },
      width: "20%",
      render: (date) => <div>{moment(date).format("DD/MM/YYYY")}</div>,
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
      width: "15%",
    },
  ];

  return (
    <ComponentContainer>
      <h4>Expense History</h4>
      <Table
        rowKey="id"
        scroll={{ x: 600 }}
        columns={columns}
        dataSource={tableExpensesData}
        pagination={{ position: ["bottomCenter"], pageSize: 4 }}
      />
    </ComponentContainer>
  );
};

export default ExpenseList;
