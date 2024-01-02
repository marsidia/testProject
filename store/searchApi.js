import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const searchApi = createApi({
  reducerPath: "search",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://preprod-api.ca2e.eu/api/v1/products/",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query({
        query: ({ page, title }) => {
          return {
            url: "/elasticsearch",
            params: {
              tag: "WEB",
              search: title,
              page: page,
            },
            method: "GET",
          };
        },
        serializeQueryArgs: ({ endpointName }) => {
          return endpointName;
        },
        merge: (currentCache, newItems, args) => {
          if (newItems.page === 1) {
            return newItems;
          } else {
            currentCache.results.push(...newItems.results);
          }
        },
        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg;
        },
      }),
      getStocks: builder.query({
        query: (productId) => {
          return {
            url: `/${productId}/stocks`,

            method: "GET",
          };
        },
      }),
      getPrices: builder.query({
        query: (productId) => {
          return {
            url: `/${productId}/prices`,

            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useFetchProductsQuery, useGetPricesQuery, useGetStocksQuery } =
  searchApi;
export { searchApi };
