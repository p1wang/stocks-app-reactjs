import React from "react";

import styles from "./Footer.module.css";

const links = ["Help", "Send feedback", "Privacy", "Terms", "Disclaimer"];

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-links"]}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          width="50px"
          alt="company-logo"
        />

        {links.map((item) => (
          <a key={item} href="/">
            {item}
          </a>
        ))}
      </div>
      <span className={styles["copy-right"]}>
        &copy;2022 Stocks. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
