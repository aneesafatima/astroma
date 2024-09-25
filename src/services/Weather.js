import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lng }) =>
        `/weather?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_REACT_APP_WEATHER_API}`,
    }),
    getUvIndex: builder.query({
      query: ({ lat, lng }) =>
        `/uvi?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_REACT_APP_WEATHER_API}`,
    }),
  }),
});

export const { useGetWeatherQuery, useGetUvIndexQuery } = weatherApi;
