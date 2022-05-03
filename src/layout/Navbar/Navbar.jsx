import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);

  const handleOnBurgerClick = () => {
    setShowDropDownMenu(!showDropDownMenu);
  };

  const handleLinkOnClick = () => {
    setShowDropDownMenu(false);
  };

  return (
    <header className={styles["nav-container"]}>
      {showDropDownMenu ? (
        <AiFillCloseCircle
          className={styles["burger"]}
          onClick={handleOnBurgerClick}
        />
      ) : (
        <GiHamburgerMenu
          className={styles["burger"]}
          onClick={handleOnBurgerClick}
        />
      )}

      <nav
        className={
          showDropDownMenu
            ? styles["nav-list"]
            : `${styles["nav-list"]} ${styles["closed"]}`
        }
      >
        <Link to="/" onClick={handleLinkOnClick}>
          Home
        </Link>
        <Link to="/news" onClick={handleLinkOnClick}>
          News
        </Link>
        <Link to="/stocks" onClick={handleLinkOnClick}>
          Stocks
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
