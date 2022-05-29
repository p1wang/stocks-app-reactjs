import millify from "millify";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetStockKeyDataQuery } from "../../services/stocksApi";
import Loader from "../Loader/Loader";

import styles from "./StockKeyData.module.css";

const StockKeyData = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetStockKeyDataQuery({ id: id });

  const stockData = [];

  if (data?.data) {
    const {
      companyName,
      exchange,
      divRate,
      marketCap,
      peRatioFwd,
      eps,
      high,
      low,
      close,
      volume,
      avg3vol,
      pegRatio,
      shares,
      totalRevenue,
      low52,
      equityType,
    } = data?.data[0].attributes;

    stockData.push(["Name", companyName]);
    stockData.push(["Exchange", exchange]);
    stockData.push(["Equity Type", equityType]);
    stockData.push(["Today's High", high]);
    stockData.push(["Today's Low", low]);
    stockData.push(["Previous Close", close]);
    stockData.push(["Annualized Dividend", divRate]);
    stockData.push(["Market Cap", marketCap]);
    stockData.push(["Forward P/E 1 Yr.", peRatioFwd]);
    stockData.push(["Earnings Per Share(EPS)", eps]);
    stockData.push(["Volume", volume]);
    stockData.push(["Avg. Volume", avg3vol]);
    stockData.push(["52 Week Low", low52]);
    stockData.push(["PEG Ratio", pegRatio]);
    stockData.push(["Shares Outstanding", shares]);
    stockData.push(["Total Revenue", totalRevenue]);
  }

  if (isFetching) return <Loader />;

  return data?.errors ? (
    <></>
  ) : (
    <div className={styles["key-data-container"]}>
      <h1>{!isFetching && id.toUpperCase()}</h1>
      <div className={styles["key-data-table-container"]}>
        <table>
          <tbody>
            {stockData
              .slice(0, Math.floor(stockData.length / 2))
              .map((item) => (
                <tr key={item[0]}>
                  <td>{item[0]}</td>
                  <td>
                    {item[1]
                      ? !isNaN(item[1]) && !isNaN(parseFloat(item[1]))
                        ? millify(item[1])
                        : item[1]
                      : "n/a"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <table>
          <tbody>
            {stockData
              .slice(Math.floor(stockData.length / 2) + 1, stockData.length)
              .map((item) => (
                <tr key={item[0]}>
                  <td>{item[0]}</td>
                  <td>
                    {!isNaN(item[1]) && !isNaN(parseFloat(item[1]))
                      ? millify(item[1])
                      : item[1]}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockKeyData;
