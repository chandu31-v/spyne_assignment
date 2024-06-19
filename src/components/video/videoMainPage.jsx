import React from "react";
import Video from "./videoPlayer"

function VideoPage({data}) {

    console.log(data)

    return (<>
        <div className='flex flex-col w-full h-full justify-center items-center mt-4 sm:mt-0'>

            <div className='flex justify-center items-center w-[90%] h-fit sm:p-2'>
                <Video url={data.url} caption={data.caption} timeStamp={data.timeStamp}  />
            </div>
        </div>
    </>)
}

export default VideoPage
