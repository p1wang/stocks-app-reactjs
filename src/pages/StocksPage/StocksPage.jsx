import React from "react";
import { useGetStocksQuery } from "../../services/stocksApi";
import StocksList from "../../components/StocksList/StocksList";

import styles from "./StocksPage.module.css";
import Loader from "../../components/Loader/Loader";
const StocksPage = () => {
  const { data, isFetching } = useGetStocksQuery();
  // const allCategories = data && data?.data?.attributes;
  const allCategories = data?.data?.attributes;

  if (isFetching) return <Loader />;

  return (
    <div className={styles["stocks-list-container"]}>
      <StocksList
        data={allCategories?.top_gainers}
        stocksListTitle={"Top Gainers"}
      />
      <StocksList
        data={allCategories?.top_losers}
        stocksListTitle={"Top Losers"}
      />
      <StocksList
        data={allCategories?.cryptocurrencies}
        stocksListTitle={"Top Cryptos"}
      />
    </div>
  );
};

export default StocksPage;
