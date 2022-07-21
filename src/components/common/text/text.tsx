import React, {FC} from "react";
import {IText} from "./models";

export const Text: FC<IText> = (props) => {
    const {
        children,
        tag = 'p',
        lineHeight,
        color,
        fontWeight,
        fontSize,
        margin,
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
    } = props
    const TagElement = tag

    return (
        <TagElement style={{
            lineHeight: `${lineHeight}px`,
            color,
            fontWeight,
            fontSize,
            margin,
            marginTop,
            marginLeft,
            marginRight,
            marginBottom,
        }}>
            {children}
        </TagElement>
    )
}