import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://images-api.nasa.gov" }),
  endpoints: (builder) => ({
    getArticlesByCategory: builder.query({
      query: (category) =>
        `/search?q=${category}&media_type=image&year_start=${new Date().getFullYear()}`,
    }),
  }),
});

export const { useGetArticlesByCategoryQuery } = articlesApi;
