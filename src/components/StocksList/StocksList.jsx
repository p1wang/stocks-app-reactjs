import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";

import styles from "./StocksList.module.css";
import Loader from "../../components/Loader/Loader";
import { useGetCurrentPriceQuery } from "../../services/stocksApi";
import { getTextClassName } from "../../utils/getTextClassName";

const StocksList = ({ data, stocksListTitle }) => {
  const categoryTopStocks = data?.map((item) => {
    return item.slug;
  });

  const { data: categoryTopData, isFetching } = useGetCurrentPriceQuery({
    symbols: categoryTopStocks,
  });

  // if (isFetching) return <Loader />;

  return (
    <div className={styles["stocks-list-container"]}>
      <h2>{stocksListTitle}</h2>
      <table>
        <tbody>
          <tr>
            <th>Symbol</th>
            <th>Company</th>
            <th>Price</th>
            <th>% change</th>
          </tr>
          {categoryTopData?.data.map(
            ({ id, attributes: { name, last, percentChange } }) => (
              <tr key={id} className={styles["stock-container"]}>
                <td>
                  <Link to={`/quote/${id}`} className={styles["stock-link"]}>
                    {id}
                  </Link>
                </td>
                <td>{name}</td>
                <td>{last}</td>
                <td className={styles[getTextClassName(percentChange)]}>
                  {millify(percentChange)}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StocksList;
