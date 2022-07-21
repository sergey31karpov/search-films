import React, {FC} from "react";
import {IMainPage} from "./model";
import {VideoBackground} from "../../components/common/VideoBackground/VideoBackground";
import {MainSearchBlock} from "../../components/MainSearchBlock/MainSearchBlock";
import style from "./MainPage.module.css"

export const MainPage: FC<IMainPage> = () => (
    <>
        <VideoBackground/>
        <MainSearchBlock className={style.searchBlock}/>
    </>
)