import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useGetStockHistoryQuery } from "../../services/stocksApi";

import styles from "./StockChart.module.css";
import Loader from "../Loader/Loader";

const periodSelections = ["1D", "5D", "1M", "6M", "1Y", "5Y", "10Y", "MAX"];

const StockChart = () => {
  const [activeBtn, setActiveBtn] = useState(periodSelections[1]);
  const { id } = useParams();
  const { data, isFetching } = useGetStockHistoryQuery({
    id: id,
    period: activeBtn,
  });
  const stockPrice = [];
  const stockTimeStamp = [];

  if (data?.attributes) {
    let sortedData = Object.keys(data?.attributes)
      .sort()
      .reduce((res, key) => ((res[key] = data?.attributes[key]), res), {});

    for (const [key, value] of Object.entries(sortedData)) {
      stockPrice.push(value.close);
      stockTimeStamp.push(key.substr(0, 10));
    }
  }

  const state = {
    labels: stockTimeStamp,

    datasets: [
      {
        fill: true,
        backgroundColor: "rgba(0,135,60,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: stockPrice,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  if (isFetching) return <Loader />;

  console.log(data);

  return Object.keys(data?.attributes).length === 0 ? (
    <div className={styles["error-msg"]}>
      Please enter a valid stock symbol.
    </div>
  ) : (
    <div>
      <ul className={styles["period-selection-container"]}>
        {periodSelections.map((item) => (
          <li key={item}>
            <button
              onClick={() => {
                setActiveBtn(item);
              }}
              className={
                activeBtn === item
                  ? `${styles["period-select-btn"]} ${styles["active"]}`
                  : styles["period-select-btn"]
              }
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <Line data={state} options={options} />
    </div>
  );
};

export default StockChart;
