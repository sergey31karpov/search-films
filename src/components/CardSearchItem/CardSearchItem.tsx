import React, {FC, useEffect} from "react";
import {ICardSearchItem} from "./models";
import {useLazyGetTitleQuery} from "../../store/api";
import style from './CardSearchItem.module.css'

export const CardSearchItem: FC<ICardSearchItem> = (props) => {
    const {id} = props

    const [fetchTitle, {data}] = useLazyGetTitleQuery()

    useEffect(() => {
        id && fetchTitle(id)
    }, [id, fetchTitle])

    return (
        <div className={style.container}>
            <div className={style.description}>
                <img src={data?.image} alt="poster" className={style.img}/>
                <div className={style.text}>
                    <h1 className={style.title}>
                        {data?.title}
                    </h1>
                    <h2 className={style.titleType}>
                        {`${data?.type} | ${data?.genres} | ${data?.year}`}
                    </h2>
                    <h3 className={style.awards}>
                        {data?.awards}
                    </h3>
                </div>
            </div>
            <div className={style.rating}>
                {`IMDb ${data?.imDbRating}`}
            </div>
        </div>
    )
}