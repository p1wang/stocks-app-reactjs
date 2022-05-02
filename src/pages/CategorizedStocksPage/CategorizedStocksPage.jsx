import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StocksList from "../../components/StocksList/StocksList";
import { useGetStocksQuery } from "../../services/stocksApi";

import styles from "./CategorizedStocksPage.module.css";
import Loader from "../../components/Loader/Loader";

const CategorizedStocksPage = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetStocksQuery();
  // const allCategories = data && data?.data?.attributes;
  const allCategories = data?.data?.attributes;
  const [categoryData, setCatetoryData] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    switch (id) {
      case "topgainers":
        setCatetoryData(allCategories?.top_gainers);
        setCategoryTitle("Top Gainers");
        break;
      case "toplosers":
        setCatetoryData(allCategories?.top_losers);
        setCategoryTitle("Top Losers");
        break;
      case "mostactive":
        setCatetoryData(allCategories?.most_active);
        setCategoryTitle("Most Active");
        break;
      case "topcryptos":
        setCatetoryData(allCategories?.cryptocurrencies);
        setCategoryTitle("Top Cryptos");
        break;
      case "faang":
        setCatetoryData(allCategories?.faang_stocks);
        setCategoryTitle("FAANG");
        break;
      case "inthenews":
        setCatetoryData(allCategories?.in_the_news);
        setCategoryTitle("In the News");
        break;
      default:
        navigate("/");
    }
  }, [setCategoryTitle, setCatetoryData, allCategories, navigate, id]);

  if (isFetching) return <Loader />;

  return (
    <div className={styles["categorized-page-container"]}>
      <StocksList data={categoryData} stocksListTitle={categoryTitle} />
    </div>
  );
};

export default CategorizedStocksPage;
