import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useMatch, useNavigate } from "react-router-dom";

import styles from "./Search.module.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  let navigate = useNavigate();

  const matchHomeRoute = useMatch("/");
  const matchStocksRoute = useMatch("/stocks/*");
  const matchQuoteRoute = useMatch("/quote/*");
  const matchNewsRoute = useMatch("/news/*");
  const matchFearIndexRoute = useMatch("/fearindex/*");

  const handleOnClick = () => {
    setSearchTerm("");
    matchHomeRoute && navigate(`/quote/${searchTerm}`);
    matchStocksRoute && navigate(`/quote/${searchTerm}`);
    matchQuoteRoute && navigate(`/quote/${searchTerm}`);
    matchNewsRoute && navigate(`/news?search=${searchTerm}`);
    matchFearIndexRoute && navigate(`/quote/${searchTerm}`);
  };

  const handleOnEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <div className={styles["search-container"]}>
      <input
        type="text"
        placeholder="Search for a stock/crypto symbol"
        value={searchTerm}
        onKeyPress={handleOnEnterKeyPress}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <BsSearch onClick={handleOnClick} />
    </div>
  );
};

export default Search;
