import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { searchApi } from "./searchApi";

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(searchApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchProductsQuery } from "./searchApi";
