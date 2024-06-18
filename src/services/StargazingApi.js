import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.open-elevation.com/api/v1",
  }),
  endpoints: (builder) => ({
    getElevation: builder.query({
      query: ({ lat, lng }) => `/lookup?locations=${lat},${lng}`,
    }),
  }),
});

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.astronomyapi.com/api/v2",
    prepareHeaders: (headers) => {
      const authString = btoa(
        ``
      );
      console.log(authString)
      headers.Authorization = `Basic ${authString}`;
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getEventsApi: builder.query({
      query: ({ body, lat, lng, elevation }) => {
        const toDate = new Date(Date.now() + (1000 * 60 * 60 * 24 * 30))
          .toISOString()
          .substring(0,10);
        console.log(toDate)
        const fromDate = new Date().toISOString().substring(0,10);
        console.log(fromDate)
        const currentTime = new Date().toLocaleTimeString("en-US", {
          hour12: false,
        });
        console.log(currentTime);
        console.log(
          `/bodies/events/${body}?latitude=${lat}&longitude=${lng}&elevation=${elevation}&from_date=${fromDate}&to_date=${toDate}&time=${currentTime}`
        );
        return `/bodies/events/${body}?latitude=${lat}&longitude=${lng}&elevation=${elevation}&from_date=${fromDate}&to_date=${toDate}&time=${currentTime}`
      },
    }),
  }),
});

export const { useGetElevationQuery } = locationApi;
export const { useGetEventsApiQuery } = eventsApi;
