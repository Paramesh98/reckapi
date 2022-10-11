import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// rtk query for character
export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  endpoints: (builder) => ({
    getAllCharacter: builder.query({
      query: () => `character`,
    }),
    getLocation: builder.query({
      query: ({ id }) => `location/${id}`,
    }),
  }),
});

export const { useGetAllCharacterQuery, useGetLocationQuery } = characterApi;
