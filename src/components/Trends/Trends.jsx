import React from "react";
import Chip from "./Chip/Chip";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { FaBitcoin } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";

import styles from "./Trends.module.css";

const Trends = () => {
  return (
    <div className={styles["trends-container"]}>
      <h2>Market trends</h2>
      <div className={styles["chips-container"]}>
        <Chip chipText={"Top Gainers"}>
          <HiTrendingUp />
        </Chip>
        <Chip chipText={"Top Losers"}>
          <HiTrendingDown />
        </Chip>
        <Chip chipText={"Top Cryptos"}>
          <FaBitcoin />
        </Chip>
        <Chip chipText={"Most Active"}>
          <FiBarChart />
        </Chip>
        <Chip chipText={"FAANG"}>
          <BsGlobe />
        </Chip>
      </div>
    </div>
  );
};

export default Trends;
