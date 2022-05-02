import React from "react";
import Chip from "./Chip/Chip";

import styles from "./Trends.module.css";

const Trends = () => {
  return (
    <div className={styles["trends-container"]}>
      <h2>Market trends</h2>
      <div className={styles["chips-container"]}>
        <Chip chipText={"Top Gainers"} />
        <Chip chipText={"Top Losers"} />
        <Chip chipText={"Top Cryptos"} />
        <Chip chipText={"Most Active"} />
        <Chip chipText={"FAANG"} />
      </div>
    </div>
  );
};

export default Trends;
