import React from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import { useGetNewsDetailsQuery } from "../../../services/stocksApi";
import Loader from "../../Loader/Loader";

import styles from "./NewsDetails.module.css";
const NewsDetails = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetNewsDetailsQuery({ id: id });

  const newsData = data?.data?.attributes;

  console.log(data);

  if (isFetching) return <Loader />;

  return (
    <div className={styles["news-details"]}>
      <h1>{newsData.title}</h1>
      <span>Published on: </span>
      <Moment>{newsData.publishOn}</Moment>

      <div
        className={styles["news-article"]}
        dangerouslySetInnerHTML={{ __html: newsData.content }}
      />
    </div>
  );
};

export default NewsDetails;
