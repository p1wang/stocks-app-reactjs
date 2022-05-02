import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createRequest = (url) => ({
  url,
  headers: {
    "X-RapidAPI-Host": "fear-and-greed-index.p.rapidapi.com",
    "X-RapidAPI-Key": "044eeea7a8msh93f2a58b6543b37p1a5ef9jsn7fbebc696739",
  },
});

export const fearIndexApi = createApi({
  reducerPath: "fearIndexApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fear-and-greed-index.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getFearIndex: builder.query({
      query: () => createRequest(`/v1/fgi`),
    }),
  }),
});

export const { useGetFearIndexQuery } = fearIndexApi;
