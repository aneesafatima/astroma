import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const planetsApi = createApi({
 reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.le-systeme-solaire.net/rest' }),
  endpoints: (builder) => ({
    getPlanetInfo: builder.query({
      query: (planet) => `/bodies/${planet}`,
    }),
  }),
})

export const {useGetPlanetInfo} = planetsApi;