import React from "react";
import style from './video-background.module.css'
import background from '../../assets/video-background/videoplayback.webm'

export const VideoBackground = () => {

    return (
        <video className={style.video} autoPlay loop muted id="video">
            <source
                src={background}
                type="video/mp4"/>
        </video>
    )
}