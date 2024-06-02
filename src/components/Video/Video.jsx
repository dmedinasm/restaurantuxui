import React, { useRef, useEffect } from 'react'
import meal from '../../assets/meal.mp4'

const Video = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    videoRef.current.play()
  }, [])

  return (
    <div className="relative">
      <video
        src={meal}
        ref={videoRef}
        muted
        loop
        autoPlay
        controls={false}
        className="w-full object-cover opacity-[0.5]"
      />

    </div>
  )
}

export default Video
