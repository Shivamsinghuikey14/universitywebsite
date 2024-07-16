import React from 'react'
import'./Videoplayer.css'

import video from '../../assets/college-video.mp4'

const Videoplayer = () => {
  return (
    <div>
      <div  className='video-player'>
         <video src={video}></video>
      </div>

    </div>
  )
}

export default Videoplayer
