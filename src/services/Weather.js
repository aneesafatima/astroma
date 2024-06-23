import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
 reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://images-api.nasa.gov' }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({lat, lng}) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_REACT_APP_WEATHER_API}`,
    }),
  }),
})

export const {useGetWeatherQuery} = weatherApi;