import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createRequest = (url) => ({
  url,
  headers: {
    "X-RapidAPI-Host": process.env.REACT_APP_FEAR_INDEX_HOST,
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  },
});

export const fearIndexApi = createApi({
  reducerPath: "fearIndexApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_NEWS_API_URL,
  }),
  endpoints: (builder) => ({
    getFearIndex: builder.query({
      query: () => createRequest(`/v1/fgi`),
    }),
  }),
});

export const { useGetFearIndexQuery } = fearIndexApi;
