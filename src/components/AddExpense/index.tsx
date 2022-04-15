import React, { useState } from "react";
import { Button } from "antd";
import ExpenseModal from "./components/ExpenseModal";
import { ComponentContainer } from "./addExpense.style";

const AddExpense = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ComponentContainer>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Add Expense
      </Button>
      <ExpenseModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
    </ComponentContainer>
  );
};
export default AddExpense;
