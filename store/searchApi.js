import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const searchApi = createApi({
  reducerPath: "search",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://https://preprod-api.ca2e.eu/api.products",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query({
        query: (enteredProduct) => {
          return {
            url: "/elasticsearch",
            params: {
              tag: "WEB",
              search: enteredProduct,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useFetchProductsQuery } = searchApi;
export { searchApi };
