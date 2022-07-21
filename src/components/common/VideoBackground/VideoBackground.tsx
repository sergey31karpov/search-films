import React from "react";
import style from './VideoBackground.module.css'

export const VideoBackground = () => {
    const videoUrl = 'https://rr4---sn-4g5edn6k.googlevideo.com/videoplayback?expire=1658440846&ei=LXjZYoTxO' +
        's-Dp-oPo5ugmAU&ip=91.197.235.195&id=o-AFlBKKLVxsJMf8Fo9IrKTEKsqUpftzZYieGucnVsyBhn&itag=248&aitags=' +
        '133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes' +
        '&spc=lT-KhujvriGoa13E--v8iQD0TiVrxh4&vprv=1&mime=video%2Fwebm&ns=ohkN6Yo38x5QkoFsYC3VntoH&gir=yes&cl' +
        'en=72977407&dur=362.987&lmt=1543619952498029&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5432432&n' +
        '=2JDcT2-hqt7v8w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2' +
        'Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgEsl8SDtdh0XptR59me51LROqILXsKcXXuanpCYDcb04CIQC0idPQLmzOcqur6CR' +
        'g58sm75R_Rh0QMCRCxkMIbp4hwA%3D%3D&redirect_counter=1&cm2rm=sn-q0ce77l&req_id=db3521066ccea3ee&cms_redir' +
        'ect=yes&mh=xc&mip=2a00:1370:8180:b103:551d:e4ef:cf20:1b80&mm=34&mn=sn-4g5edn6k&ms=ltu&mt=1658418790&mv' +
        '=m&mvi=4&pl=49&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgedoAD0f5XGA9IYmCpTb1Ps_PQRrnkDLcIQQm-' +
        'Z9KcdUCIGhTT90PFCYGPyTCotH-TnSOjD3w626sFfqpNBcG0mLE'

    return (
        <video className={style.video} autoPlay loop muted id="video">
            <source
                src={videoUrl}
                type="video/mp4"/>
        </video>
    )
}