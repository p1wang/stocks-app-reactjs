import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles["nav-container"]}>
      <nav className={styles["nav-list"]}>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/stocks">Stocks</Link>
        <Link to="/fearindex">Fear&Greed</Link>
      </nav>
    </header>
  );
};

export default Navbar;
