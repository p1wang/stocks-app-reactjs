import React from "react";
import { Link } from "react-router-dom";

import styles from "./Chip.module.css";

const Chip = ({ chipText, children }) => {
  return (
    <Link
      to={`/stocks/${chipText.toLowerCase().replace(/\s/g, "")}`}
      className={styles["chip-link"]}
    >
      <div className={styles["chip-container"]}>
        {children}
        <span> {chipText}</span>
      </div>
    </Link>
  );
};

export default Chip;
