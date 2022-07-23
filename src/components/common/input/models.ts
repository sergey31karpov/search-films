import {ChangeEventHandler, CSSProperties} from "react";

export type TTheme = 'light' | 'dark'

export interface IInput {
    searchValue?: string
    theme?: TTheme
    className?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    style?: CSSProperties
    beforeIcon?: () => JSX.Element
}