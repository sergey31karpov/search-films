import React from "react";
import background from "./background/video.mp4"
import style from './VideoBackground.module.css'

export const VideoBackground = () => (
    <video className={style.video} autoPlay loop muted id="video">
        <source src={background} type="video/mp4"/>
    </video>
)