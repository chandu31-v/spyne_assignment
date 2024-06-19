import React, { useState } from "react";
import ReactPlayer from 'react-player'

function Video({ url, caption, timeStamp }) {

    // playing={true} onEnded={videoAutoPlay}
    const [show, setShow] = useState(false)

    let time = 0, mul = 1
    timeStamp.split(":").reverse().forEach((value) => {
        try {
            time = time + parseInt(value) * mul
            mul = mul * 60
        } catch (err) {
            console.log(err)
        }
    })

    return (<>
        <div className="w-full p-2">
            <ReactPlayer
                url={url}
                controls={true}
                width={'100%'}
                height={'100%'}
                playing={true}
                captions={caption}
                onProgress={({ playedSeconds }) => {
                    if (playedSeconds > time && playedSeconds < time+2) {
                        setShow(true)
                    }
                }}
            />

            {/* Captions */}
            <div>
                {show ? <h1 className=" text-4xl text-gray-300 font-bold">{caption}</h1> : null}
            </div>
        </div>
    </>)
}

export default Video