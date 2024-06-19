import React, { useRef, useState } from 'react'
import VideoPage from "./components/video/videoMainPage"
import HistoryPlayList from "./components/UrlHistory/historyPlayList"


function App() {

  const url = useRef(null)
  const caption = useRef(null)
  const timeStamp = useRef(null)
  const [videoData, setVideoData] = useState(null)
  const [message,setMessage] = useState(null)

  const loadVideo = () => {
    if(url.current.value!=="" && caption.current.value!=="" && timeStamp.current.value!=="" ){
      console.log("inside")
      setVideoData({ url: url.current.value, caption: caption.current.value, timeStamp: timeStamp.current.value })
    }
    else{
      setMessage("Enter all value")
      setTimeout(()=>setMessage(null),3000)
    }
  }

  return (
      <div className='flex flex-col max-w-screen min-h-screen bg-[url(./img1.jpg)] bg-cover'>

        {/* take video input */}
        <div className='w-full pt-2'>
          <div className='flex'>
          <input type="text" ref={url} placeholder='  Enter video url' className='w-1/4 mx-1 rounded-sm' />
          <input type="text" ref={caption} placeholder='  Enter caption' className='w-1/4 mx-1 rounded-sm' />
          <input type="text" ref={timeStamp} placeholder='  Enter timestamp' className='w-1/4 mx-1 rounded-sm' />
          <button onClick={loadVideo} className='px-1 bg-gray-700 rounded text-gray-400 hover:text-gray-900 hover:bg-gray-400'>Search</button>
          </div>

          <div className=''>
            {message? <p className=' text-red-600 font-bold'>{message}</p> : ""}
          </div>
        </div>

        <div className='flex flex-col min-[500px]:flex-row justify-center w-full h-screen'>

          {/* Video Component */}
          <div className='w-full min-[500px]:w-4/6 my-2 sm:m-0'>
            {videoData!=null ? <VideoPage data={videoData} /> : " "}
          </div>

          {/* HistoryPlaylist component */}
          <div className='w-full h-full min-[500px]:h-full min-[500px]:w-2/6 p-4 rounded'>
            <HistoryPlayList HistoryData={videoData} />
          </div>

        </div >
      </div>
  )
}

export default App
