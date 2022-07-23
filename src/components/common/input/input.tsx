import React, {FC, useMemo} from "react";
import styles from "./input.module.css";
import {IInput, TTheme} from "./models";
import {useTypingText} from "./hooks/use-typing-text";
import cn from "classnames";

export const Input: FC<IInput> = (props) => {
    const {searchValue, onChange, className, theme, style, beforeIcon: BeforeIcon} = props

    const texts = useMemo(() => [
        ' Game of Thrones  ',
        ' The Queen\'s Gambit  ',
        ' The Avengers  ',
    ], [])

    const returnTheme = (theme: TTheme) => {
        switch (theme) {
            case 'light' :
                return styles.light
            case 'dark' :
                return styles.dark
            default:
                return styles.light
        }
    }

    const erasingAndTypingTime = useMemo(() => 200, [])

    const {typingText: placeholder} = useTypingText({texts, erasingAndTypingTime})

    return (
        <>
            {BeforeIcon && <span className={styles.beforeIcon}><BeforeIcon/></span>}
            <input
                style={style}
                value={searchValue}
                onChange={onChange}
                placeholder={placeholder}
                className={cn({
                        [styles.isBeforeIcon]: !!BeforeIcon
                    },
                    styles.input,
                    className,
                    returnTheme(theme as TTheme))}
            />
        </>
    )
}