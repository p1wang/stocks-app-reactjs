import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import styles from "./NewsList.module.css";
import {
  useGetNewsQuery,
  useGetRelatedNewsQuery,
} from "../../services/stocksApi";
import Loader from "../Loader/Loader";

const NewsList = ({ count }) => {
  const [searchParams] = useSearchParams();
  const [news, setNews] = useState();

  const { data: topNews, isFetchingTopNews } = useGetNewsQuery({
    category: "market-news::top-news",
    size: 10,
  });

  const { data: newsById, isFetchingRelatedNews } = useGetRelatedNewsQuery({
    id: searchParams.get("search") ? searchParams.get("search") : "aapl",
    size: 10,
  });

  useEffect(() => {
    searchParams.get("search")
      ? !newsById?.errors && setNews(newsById)
      : setNews(topNews);
  }, [newsById, searchParams, topNews]);

  if (isFetchingRelatedNews || isFetchingTopNews) return <Loader />;

  return newsById?.errors ? (
    <div className={styles["error-msg"]}>
      Please enter a valid stock symbol.
    </div>
  ) : (
    <div className={styles["news-list-container"]}>
      {news?.data
        .slice(0, count)
        ?.map(({ id, attributes: { title, gettyImageUrl } }) => (
          <div key={id} className={styles["news-item-container"]}>
            <div>
              <Link to={`/news/${id}`} className={styles["news-title"]}>
                <p>{title}</p>
              </Link>
            </div>
            <Link to={`/news/${id}`}>
              <img
                src={gettyImageUrl ? gettyImageUrl : "./seeking-alpha.png"}
                alt="news coverPhoto"
                width="100px"
                height="100px"
                className={styles["news-thumbnail"]}
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default NewsList;
