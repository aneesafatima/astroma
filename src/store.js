import { configureStore } from '@reduxjs/toolkit/react'
import { articlesApi } from './services/astronomicalObjects'
import { planetsApi } from './services/planetsApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [articlesApi.reducerPath]: articlesApi.reducer,
    [planetsApi.reducerPath]: planetsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware).concat(planetsApi.middleware),
})