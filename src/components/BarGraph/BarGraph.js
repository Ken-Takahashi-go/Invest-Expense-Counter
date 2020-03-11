import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

const BarChart = props => {
  const investLists = props.items
    .filter(item => item.status === "投資")
    .map(item => {
      return Number(item.hour);
    });
<<<<<<< HEAD

=======
  console.log(investLists);
>>>>>>> origin/master
  const expenseLists = props.items
    .filter(item => item.status === "浪費")
    .map(item => {
      return Number(item.hour);
    });
<<<<<<< HEAD
=======
  console.log(expenseLists);
>>>>>>> origin/master

  const invest = investLists.reduce((acc, amount) => acc + amount, 0);
  const expense = expenseLists.reduce((acc, amount) => acc + amount, 0);
  const data = {
    labels: [],
    datasets: [
      {
        label: "My First dataset",
        fill: true,
        lineTension: 1,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "square",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#eee",
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [invest, expense]
      }
    ]
  };

  return (
    <div>
      <h2>グラフ</h2>
      <Bar data={data} />
    </div>
  );
};

const mapStateToProps = state => {
  return { items: state };
};

export default connect(mapStateToProps, null)(BarChart);
