import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const planetsApi = createApi({
  reducerPath: "planetsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.le-systeme-solaire.net/rest",
  }),
  endpoints: (builder) => ({
    getPlanetInfo: builder.query({
      query: (planet) => `/bodies/${planet}`,
    }),
  }),
});
export const wikiApi = createApi({
  reducerPath: "wikiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://en.wikipedia.org/api/rest_v1/page/",
  }),
  endpoints: (builder) => ({
    getPlanetDef: builder.query({
      query: (planet) => `/summary/${planet}_(planet)`,
    }),
  }),
});

export const { useGetPlanetInfoQuery } = planetsApi;
export const { useGetPlanetDefQuery } = wikiApi;
