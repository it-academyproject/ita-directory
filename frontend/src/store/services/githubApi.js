// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/repos/IT-Academy-BCN/ita-directory',
    prepareHeaders: (headers) => {
      headers.set('content-type', 'application/json')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getContributors: builder.query({
      query: () => '/contributors',
    }),
  }),
})

export const { useGetContributorsQuery } = githubApi