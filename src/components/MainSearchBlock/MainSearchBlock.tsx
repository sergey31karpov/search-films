import React, {ChangeEvent, FC, useCallback, useEffect, useState} from "react";
import {IMainSearchBlock} from "./model";
import style from "./MainSearchBlock.module.css";
import cn from 'classnames';
import {useLazyGetSearchQuery} from "../../store/api";
import {useDebounce} from "./hooks/debounce";
import {CardSearchItem} from "../CardSearchItem/CardSearchItem";
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";

export const MainSearchBlock: FC<IMainSearchBlock> = (props) => {
    const {className} = props

    const [searchValue, setSearchValue] = useState('')

    const debounceValue = useDebounce(searchValue)

    const [fetchSearch, {data}] = useLazyGetSearchQuery()

    const isData = data && data?.length !== 0

    useEffect(() => {
        fetchSearch(debounceValue)
    }, [debounceValue, fetchSearch])

    const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const onClickSearch = useCallback(() => {
        fetchSearch(debounceValue)
    }, [fetchSearch, debounceValue])

    return (
        <div className={cn(style.container, className)}>
            <h1 className={style.title}>Unlimited movies, TV shows, and more.</h1>
            <h2 className={style.subTitle}>Watch anywhere. Cancel anytime.</h2>
            <div className={style.searchBlock}>
                <Input
                    className={style.inputSearch}
                    searchValue={searchValue}
                    onChange={onChangeSearchValue}
                    theme="light"
                />
                <Button
                    className={style.buttonSearch}
                    onClick={onClickSearch}
                />
            </div>
            <div className={cn({
                [style.notSearchItems]: !isData
            }, style.searchItems)}>
                {data?.map(id => <CardSearchItem key={id} id={id}/>)}
            </div>
        </div>
    )
}