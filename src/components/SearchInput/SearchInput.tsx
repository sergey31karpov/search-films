import React, {FC, useMemo} from "react";
import style from "./SearchInput.module.css";
import {ISearchInput} from "./models";
import {useTypingText} from "../MainSearchBlock/hooks/useTypingText";

export const SearchInput: FC<ISearchInput> = (props) => {
    const {searchValue, onChangeSearchValue, onClickSearch} = props

    const texts = useMemo(() => [
        ' Game of Thrones  ',
        ' The Queen\'s Gambit  ',
        ' The Avengers  ',
    ], [])

    const erasingAndTypingTime = useMemo(() => 200, [])

    const {typingText: placeholder} = useTypingText({texts, erasingAndTypingTime})

    return (
        <div className={style.block}>
            <input
                value={searchValue}
                onChange={onChangeSearchValue}
                placeholder={placeholder}
                className={style.input}
            />
            <button onClick={onClickSearch} className={style.button}>Search</button>
        </div>
    )
}