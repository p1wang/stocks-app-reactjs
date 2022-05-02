import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createRequest = (url) => ({
  url,
  headers: {
    "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    "X-RapidAPI-Key": "cb3609953fmsh48d94247caad89ap1be71cjsn2f50124cf018",
  },
});

export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://seeking-alpha.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ category, size }) =>
        createRequest(`/news/v2/list?q=${category}&size=${size}`),
    }),
    getNewsDetails: builder.query({
      query: ({ id }) => createRequest(`/news/get-details?id=${id}`),
    }),
    getRelatedNews: builder.query({
      query: ({ id, size }) =>
        createRequest(`/news/v2/list-by-symbol?id=${id}&size=${size}`),
    }),
    getStocks: builder.query({
      query: () => createRequest(`/market/get-day-watch`),
    }),
    getCurrentPrice: builder.query({
      query: ({ symbols }) =>
        createRequest(`/market/get-realtime-prices?symbols=${symbols}`),
    }),
    getStockKeyData: builder.query({
      query: ({ id }) => createRequest(`/symbols/get-key-data?symbol=${id}`),
    }),
    getStockHistory: builder.query({
      query: ({ id, period }) =>
        createRequest(`/symbols/get-chart?symbol=${id}&period=${period}`),
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetNewsDetailsQuery,
  useGetRelatedNewsQuery,
  useGetStocksQuery,
  useGetStockKeyDataQuery,
  useGetCurrentPriceQuery,
  useGetStockHistoryQuery,
} = stocksApi;
