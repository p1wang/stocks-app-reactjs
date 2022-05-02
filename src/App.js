import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Layout from "./layout/Layout";
import CategorizedStocksPage from "./pages/CategorizedStocksPage/CategorizedStocksPage";
import FearIndexPage from "./pages/FearIndexPage/FearIndexPage";
import HomePage from "./pages/HomePage/HomePage";
import NewsDetailsPage from "./pages/NewsDetailsPage/NewsDetailsPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import StockDetailsPage from "./pages/StockDetailsPage/StockDetailsPage";
import StocksPage from "./pages/StocksPage/StocksPage";

console.log(process.env.REACT_APP_RAPIDAPI_KEY);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stocks" element={<StocksPage />} />
        <Route path="/stocks/:id" element={<CategorizedStocksPage />} />
        <Route path="/fearindex" element={<FearIndexPage />} />
        <Route path="/quote/:id" element={<StockDetailsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
