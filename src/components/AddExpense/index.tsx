import React, { useState } from "react";
import { Button, Modal } from "antd";
import ExpenseModal from "./components/ExpenseModal";

const AddExpense = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Add Expense
      </Button>
      <ExpenseModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
    </>
  );
};
export default AddExpense;
