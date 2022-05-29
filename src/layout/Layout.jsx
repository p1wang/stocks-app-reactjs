import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Data is loading slow due to high API latency
      </p>
      <Search />
      <main className={styles["main-container"]}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
