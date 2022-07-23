import React, {FC, memo} from "react";
import style from "./button.module.css";
import {IButton} from "./models";
import cn from "classnames";

export const Button: FC<IButton> = memo((props) => {
    const {onClick, className} = props

    return (
        <button onClick={onClick} className={cn(style.button, className)}>Search</button>
    )
})