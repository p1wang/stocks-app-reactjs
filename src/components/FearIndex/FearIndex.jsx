import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useGetFearIndexQuery } from "../../services/fearIndexApi";

import styles from "./FearIndex.module.css";
import Loader from "../Loader/Loader";

const FearIndex = () => {
  const { data, isFetching } = useGetFearIndexQuery();

  let fearIndexValue = data?.fgi?.now?.value;

  const convertToWords = () => {
    if (fearIndexValue <= 25) {
      return "Extreme Fear";
    } else if (fearIndexValue > 25 && fearIndexValue < 50) {
      return "Fear";
    } else if ((fearIndexValue = 50)) {
      return "Neutral";
    } else if (fearIndexValue > 50 && fearIndexValue <= 75) {
      return "Greed";
    } else if (fearIndexValue > 75 && fearIndexValue <= 100) {
      return "Extreme Greed";
    }
  };

  const state = {
    labels: ["Extreme Fear", "Fear", "Neutral", "Greed", "Extreme Greed"],

    labels: { render: "percentage" },

    datasets: [
      {
        backgroundColor: ["#7bd95e", "#db765a"],
        data: [fearIndexValue, 100 - fearIndexValue],
      },
    ],
    text: "20",
  };

  const options = {
    circumference: 180,
    rotation: -90,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        position: "top",
        text: `Current Status: ${convertToWords()} (${fearIndexValue})`,
        font: { weight: "500", size: "20px" },
      },
    },
  };

  if (isFetching) return <Loader />;

  return (
    <div className={styles["fear-index-container"]}>
      <Doughnut data={state} options={options} />
    </div>
  );
};

export default FearIndex;
