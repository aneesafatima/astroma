import { configureStore } from "@reduxjs/toolkit/react";
import { articlesApi } from "./services/astronomicalObjects";
import { planetsApi, wikiApi } from "./services/planetsApi";
import { eventsApi, locationApi } from "./services/StargazingApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [articlesApi.reducerPath]: articlesApi.reducer,
    [planetsApi.reducerPath]: planetsApi.reducer,
    [wikiApi.reducerPath]: wikiApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [eventsApi.reducerPath] : eventsApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(planetsApi.middleware)
      .concat(wikiApi.middleware)
      .concat(locationApi.middleware)
      .concat(eventsApi.middleware),
});
