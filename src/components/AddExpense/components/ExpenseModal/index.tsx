import React from "react";
import { DatePicker, Form, Input, InputNumber, Modal } from "antd";
import CreatableSelect from "react-select/creatable";
import { selectCustomStyles } from "./expenseModal.style";
import { useStore } from "provider";
import { ActionType } from "../../../../constants";
import moment from "moment";

interface IExpenseModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const formatRequiredRule = (fieldName: string) => {
  return [{ required: true, message: `${fieldName} is required` }];
};

const ExpenseModal = ({ isVisible, setIsVisible }: IExpenseModalProps) => {
  const [form] = Form.useForm();
  const {
    state: { expenseTypes },
    dispatch,
  } = useStore();

  const expenseTypeOptions = expenseTypes.map((type) => ({
    label: type,
    value: type,
  }));

  const handleOk = () => {
    form.validateFields();
    const { amount, expenseName, date, type } = form.getFieldsValue();
    dispatch({
      type: ActionType.ADD,
      payload: { amount, expenseName, date: date.toString(), type: type.value },
    });
    form.resetFields();
    setIsVisible(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsVisible(false);
  };

  return (
    <Modal
      title="Add Expense"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        name="expense-form"
        labelCol={{ span: 24, offset: 0 }}
        wrapperCol={{ span: 24, offset: 0 }}
        initialValues={{ amount: 0, date: moment() }}
      >
        <Form.Item
          name="expenseName"
          label="Expense"
          rules={formatRequiredRule("Expense Name")}
        >
          <Input placeholder="Eg: Morning coffee" />
        </Form.Item>
        <Form.Item
          name="amount"
          label="Amount"
          rules={formatRequiredRule("Expense Amount")}
        >
          <InputNumber
            style={{ width: "50%" }}
            placeholder="Eg: 2"
            min={0}
            formatter={(value: number = 0) => `$ ${value}`}
          />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={formatRequiredRule("Expense Date")}
        >
          <DatePicker format="DD/MM/YYYY" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Expense Type"
          rules={formatRequiredRule("Expense Type")}
        >
          <CreatableSelect
            styles={selectCustomStyles}
            options={expenseTypeOptions}
            isClearable
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ExpenseModal;
