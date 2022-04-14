import React, { useState } from "react";
import { useStore } from "provider";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  ChartLegend,
  ComponentContainer,
  DetailContainer,
  SummaryContainer,
} from "./totalExpense.style";
import { DatePicker } from "antd";
import moment, { Moment } from "moment";
import { handleExpenseData } from "./utils";

const TotalExpense = () => {
  const [month, setMonth] = useState<Moment | null>(moment());

  const {
    state: { expenses },
  } = useStore();
  const { totalExpense, chartData } = handleExpenseData(
    expenses,
    month || moment()
  );

  return (
    <ComponentContainer>
      <div>Expense Summary</div>
      <SummaryContainer>
        <ResponsiveContainer width="50%" minWidth={250} height={250}>
          <PieChart margin={{ top: -70, right: 0, left: 40, bottom: 0 }}>
            <Pie
              data={chartData}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  name={entry.name}
                  key={`cell-${index}`}
                  fill={entry.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <DetailContainer>
          <div>
            <div>Period:</div>
            <DatePicker
              value={month}
              picker="month"
              format="MMM YYYY"
              bordered={false}
              allowClear={false}
              onChange={(date) => setMonth(date)}
            />
          </div>
          <div>
            <div>Total Expense:</div>
            <span>${totalExpense}</span>
          </div>
          <div>
            {chartData.map((data) => (
              <ChartLegend>
                <div style={{ backgroundColor: data.color }}></div>
                <span>{data.name}</span>
              </ChartLegend>
            ))}
          </div>
        </DetailContainer>
      </SummaryContainer>
    </ComponentContainer>
  );
};
export default TotalExpense;
