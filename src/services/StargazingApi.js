import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.open-elevation.com/api/v1",
  }),
  endpoints: (builder) => ({
    getElevation: builder.query({
      query: ({ lat, lng }) => {
        return `/lookup?locations=${lat},${lng}`;
      },
    }),
  }),
});

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.astronomyapi.com/api/v2",
    prepareHeaders: (headers) => {
      const authString = btoa(
        `${import.meta.env.VITE_REACT_APP_ASTRONOMY_API_ID}:${import.meta.env.VITE_REACT_APP_ASTRONOMY_API_SECRET_KEY}`
      );

      headers.set("Authorization", ` Basic ${authString}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getEventsApi: builder.query({
      query: ({ body, lat, lng, elevation }) => {
        const toDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
          .toISOString()
          .substring(0, 10);
        const fromDate = new Date().toISOString().substring(0, 10);
        const currentTime = new Date().toLocaleTimeString("en-US", {
          hour12: false,
        });
        console.log(toDate);
        return `/bodies/events/${body}?latitude=${lat}&longitude=${lng}&elevation=${elevation}&from_date=${fromDate}&to_date=${toDate}&time=${currentTime}`;
      },
    }),

    getStarChart: builder.mutation({
      query: (requestedData) => {
        return {
          url: "/studio/star-chart",
          method: "POST",
          body: requestedData,
        };
      },
    }),
  }),
});

export const { useGetElevationQuery } = locationApi;
export const { useGetEventsApiQuery, useGetStarChartMutation } = eventsApi;
