import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { connect } from "react-redux";

const BarChart = props => {
  const investLists = props.items
    .filter(item => item.status === "投資")
    .map(item => {
      return Number(item.hour);
    });
  const expenseLists = props.items
    .filter(item => item.status === "浪費")
    .map(item => {
      return Number(item.hour);
    });

  const invest = investLists.reduce((acc, amount) => acc + amount, 0);
  console.log(invest);
  const expense = expenseLists.reduce((acc, amount) => acc + amount, 0);
  console.log(expense);
  const showData = [invest, expense];
  console.log(showData);

  const data = {
    labels: ["投資", "浪費", "癒し"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [6, , 6]
      }
    ]
  };

  return (
    <div>
      <h2>グラフ</h2>
      <HorizontalBar data={data} />
    </div>
  );
};

const mapStateToProps = state => {
  const items = state.visibleFilter;
  return { items };
};

export default connect(mapStateToProps, null)(BarChart);
