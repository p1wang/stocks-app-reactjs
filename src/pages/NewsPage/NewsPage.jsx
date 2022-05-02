import React from "react";
import NewsList from "../../components/NewsList/NewsList";

import styles from "./NewsPage.module.css";

const NewsPage = () => {
  return (
    <div className={styles["news-page-container"]}>
      <NewsList count={10} />
    </div>
  );
};
export default NewsPage;
