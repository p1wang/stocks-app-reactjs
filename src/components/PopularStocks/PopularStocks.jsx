import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import {
  useGetCurrentPriceQuery,
  useGetStocksQuery,
} from "../../services/stocksApi";
import Loader from "../Loader/Loader";

import styles from "./PopularStocks.module.css";
import { getTextClassName } from "../../utils/getTextClassName";

const PopularStocks = () => {
  const { data, isFetching } = useGetStocksQuery();

  let slugsList = data?.data?.attributes?.most_active.map((item) => {
    return item.slug;
  });

  const { data: realTimePrice, isFetching: realTimePriceIsLoading } =
    useGetCurrentPriceQuery({
      symbols: slugsList,
    });

  if (isFetching || realTimePriceIsLoading) return <Loader />;

  return (
    <div className={styles["popular-stocks-container"]}>
      {realTimePrice?.data?.map(
        ({ id, attributes: { name, last, percentChange } }) => (
          <Link
            to={`/quote/${id}`}
            key={id}
            className={styles["card-container"]}
          >
            <span className={styles["titles"]}>
              <h3>{id}</h3>
              <h4>{name}</h4>
            </span>
            <span className={styles["price-change"]}>
              <p>{last}</p>
              <p
                className={styles[getTextClassName(percentChange)]}
              >{`${millify(percentChange)}%`}</p>
            </span>
          </Link>
        )
      )}
    </div>
  );
};

export default PopularStocks;
