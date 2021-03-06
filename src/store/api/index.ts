import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {getSearch, transformGetSearchResponse} from "./endpoints/get-search";
import {IServerResponse} from "./models";
import {getTitle} from "./endpoints/get-title";


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://imdb-api.com/'
    }),
    endpoints: (build) => ({
        getSearch: build.query<string[], string>({
            query: getSearch,
            transformResponse: transformGetSearchResponse
        }),
        getTitle: build.query<IServerResponse['title'], string>({
            query: getTitle
        })
    })
})

export const { useLazyGetTitleQuery, useLazyGetSearchQuery } = api