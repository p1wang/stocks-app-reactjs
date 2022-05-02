import React from "react";
import FearIndex from "../../components/FearIndex/FearIndex";
import NewsList from "../../components/NewsList/NewsList";
import PopularStocks from "../../components/PopularStocks/PopularStocks";
import Trends from "../../components/Trends/Trends";

import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <PopularStocks />
      <div className={styles["main-content-container"]}>
        <NewsList count={8} />
        <div className={styles["side-container"]}>
          <div className={styles["fear-index"]}>
            <FearIndex />
          </div>
          <div className={styles["trends"]}>
            <Trends />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
