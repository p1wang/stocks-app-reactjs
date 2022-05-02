import React from "react";
import FearIndex from "../../components/FearIndex/FearIndex";

import styles from "./FearIndexPage.module.css";

const FearIndexPage = () => {
  return (
    <div className={styles["container"]}>
      <FearIndex />
    </div>
  );
};

export default FearIndexPage;
