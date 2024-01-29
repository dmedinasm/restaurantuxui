import React, {useRef, useState} from 'react'
import meal from '../../assets/meal.mp4'
import { Button } from '@mui/material'
const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const handlePlayButtonClick = () =>{
    if(!isPlaying){
      videoRef.current.play()
      setIsPlaying(true)
    }else{
      videoRef.current.pause()
      setIsPlaying(false)
    }
    
  }
  return (
    <div className="relative">
      <video src={meal} ref={videoRef}  muted loop className="w-full object-cover opacity-[0.5]" />
      <Button
   variant="contained"
   sx={{
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }}
   color="primary"
   style={{
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     borderRadius: '50%',
     width: '80px',
     height: '80px',
     border: '1px solid white',
   }}
   onClick={handlePlayButtonClick}
 >
  {isPlaying ? '❚❚' : '▶' } 
 </Button>
    </div>
  )
}

export default Video