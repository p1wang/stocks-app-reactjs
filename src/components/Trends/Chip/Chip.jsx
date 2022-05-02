import React from "react";
import { Link } from "react-router-dom";

import styles from "./Chip.module.css";
const Chip = ({ chipText }) => {
  return (
    <div className={styles["chip-container"]}>
      <Link
        to={`/stocks/${chipText.toLowerCase().replace(/\s/g, "")}`}
        className={styles["chip-link"]}
      >
        <span>{chipText}</span>
      </Link>
    </div>
  );
};

export default Chip;
