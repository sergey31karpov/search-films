import React, {FC} from "react";
import {IMainPage} from "./model";
import {VideoBackground} from "../../components/common/video-background/video-background";
import {MainSearchBlock} from "../../components/main-search-block/main-search-block";
import style from "./main-page.module.css"

export const MainPage: FC<IMainPage> = () => (
    <>
        <VideoBackground/>
        <MainSearchBlock className={style.searchBlock}/>
    </>
)