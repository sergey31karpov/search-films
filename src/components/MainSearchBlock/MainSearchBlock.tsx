import React, {ChangeEvent, FC, useCallback, useEffect, useState} from "react";
import {IMainSearchBlock} from "./model";
import style from "./MainSearchBlock.module.css";
import cn from 'classnames';
import {useLazyGetSearchQuery} from "../../store/api";
import {useDebounce} from "./hooks/debounce";
import {CardSearchItem} from "../CardSearchItem/CardSearchItem";
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";
import {Text} from "../common/text/text";

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
            <Text
                fontWeight={900}
                fontSize={64}
                lineHeight={78}
            >
                Unlimited movies, TV shows, and more.
            </Text>
            <Text
                fontWeight={500}
                fontSize={36}
                lineHeight={52}
                marginTop={40}
                marginBottom={80}
            >
                Watch anywhere. Cancel anytime.
            </Text>
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