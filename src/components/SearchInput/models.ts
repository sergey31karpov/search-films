import {ChangeEventHandler, MouseEventHandler} from "react";

export interface ISearchInput {
    searchValue: string
    onChangeSearchValue: ChangeEventHandler<HTMLInputElement>
    onClickSearch: MouseEventHandler<HTMLButtonElement>
}