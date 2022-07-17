import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {IMainSearchBlock} from "./model";
import style from "./MainSearchBlock.module.css";
import cn from 'classnames';
import {useLazyGetSearchQuery} from "../../store/api";
import {useDebounce} from "./hooks/debounce";
import {CardSearchItem} from "../CardSearchItem/CardSearchItem";
import {SearchInput} from "../SearchInput/SearchInput";

export const MainSearchBlock: FC<IMainSearchBlock> = (props) => {
    const {className} = props

    const [searchValue, setSearchValue] = useState('')

    const debounceValue = useDebounce(searchValue)

    const [fetchSearch, {data}] = useLazyGetSearchQuery()

    useEffect(() => {
        debounceValue && fetchSearch(debounceValue)
    }, [debounceValue, fetchSearch])

    const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const onClickSearch = () => {
        fetchSearch(debounceValue)
    }

    return (
        <div className={cn(style.text, className)}>
            <h1 className={style.title}>Unlimited movies, TV shows, and more.</h1>
            <h2 className={style.subTitle}>Watch anywhere. Cancel anytime.</h2>
            <SearchInput
                searchValue={searchValue}
                onChangeSearchValue={onChangeSearchValue}
                onClickSearch={onClickSearch}
            />
            {data && <div className={style.searchItems}>
                {data.map(id => <CardSearchItem key={id} id={id}/>)}
            </div>}
        </div>
    )
}