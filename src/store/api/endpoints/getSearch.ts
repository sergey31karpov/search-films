import {IServerResponse} from "../models";

export const getSearch = (search: string) => ({
    url: `API/SearchAll/k_ciymgnj0/${search}`
})

export const transformGetSearchResponse = (response: IServerResponse['search']) =>
    response.results?.map(item => item.id)