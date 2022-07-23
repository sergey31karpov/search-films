import React, {FC, useEffect} from "react";
import {ICardSearchItem} from "./models";
import {useLazyGetTitleQuery} from "../../store/api";
import style from './card-search-item.module.css'
import {Text} from "../common/text/text";

export const CardSearchItem: FC<ICardSearchItem> = (props) => {
    const {id} = props

    const [fetchTitle, {data, isSuccess}] = useLazyGetTitleQuery()

    useEffect(() => {
        id && fetchTitle(id)
    }, [id, fetchTitle])

    if (isSuccess && !data?.errorMessage) {
        return (
            <div className={style.container}>
                <div className={style.description}>
                    <img src={data?.image} alt="poster" className={style.img}/>
                    <div className={style.text}>
                        <Text
                            fontWeight={700}
                            fontSize={24}
                            lineHeight={29}
                        >
                            {data?.title}
                        </Text>
                        <Text
                            fontWeight={400}
                            fontSize={14}
                            lineHeight={17}
                            color="#FBFBFB"
                            marginTop={12}
                            marginBottom={30}
                        >
                            {`${data?.type} | ${data?.genres} | ${data?.year}`}
                        </Text>
                        <Text
                            fontWeight={400}
                            fontSize={12}
                            lineHeight={15}
                            color="#FBFBFB"
                            margin={0}
                        >
                            {data?.awards}
                        </Text>
                    </div>
                </div>
                {data?.imDbRating && <div className={style.rating}>
                    {`IMDb ${data?.imDbRating}`}
                </div>}
            </div>
        )
    }

    return <></>
}